"use client"
import { useDataChannel } from '@livekit/components-react';
import { useCallback, useEffect, useState } from 'react';
import type { ReceivedDataMessage } from '@livekit/components-core';
import { buttonVariants } from '@/components';
import { cn } from '~/lib/utils';

export const Transcriber = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [activity, setActivity] = useState<number>(Date.now());
  const [state, setState] = useState<GPTState>(GPTState.Idle);
  const [transcripts, setTranscripts] = useState<Map<string, string>>(new Map()); // transcription of every participant

  const onData = useCallback((message: ReceivedDataMessage) => {
    const decoder = new TextDecoder();
    const packet = JSON.parse(decoder.decode(message.payload)) as Packet;
    if (packet.type == PacketType.Transcript) {
      const transcript = packet.data as TranscriptPacket;
      const sid = transcript.sid;
      const text = transcript.name + ': ' + transcript.text;
      setTranscripts(new Map(transcripts.set(sid, text)));
      setActivity(Date.now());

      if (state == GPTState.Active) {
        setVisible(true);
      }
    } else if (packet.type == PacketType.State) {
      const statePacket = packet.data as StatePacket;
      setState(statePacket.state);
    }
  }, [state, transcripts]);

  useDataChannel(undefined, onData);

  useEffect(() => {
    const currentActivity = activity;
    const timeout = setTimeout(() => {
      if (currentActivity == activity) {
        setVisible(false);
        setTranscripts(new Map());
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activity]);

  return visible ? (
    <div
	className={cn('transcriber', "container", 'transcriber-' + state, buttonVariants({ variant: 'ghost', size: 'sm' }))}
    >
      {Array.from(transcripts.entries()).map((entry) => {
        const [key, value] = entry;
        return (
          <span key={key} className='m-0'>
            {value}
          </span>
        );
      })}
    </div>
  ) : (
    <> </>
  );
};