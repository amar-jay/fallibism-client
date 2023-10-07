"use client"
import { useDataChannel } from '@livekit/components-react';
import { useCallback, useEffect, useState } from 'react';
import type { ReceivedDataMessage } from '@livekit/components-core';

export const ErrorMessage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onData = useCallback((message: ReceivedDataMessage) => {
    const decoder = new TextDecoder();
    const packet = JSON.parse(decoder.decode(message.payload)) as Packet;
    if (packet.type == PacketType.Error) {
      const errorPacket = packet.data as ErrorPacket;
      setError(errorPacket.message);
    }
  }, []);

  useDataChannel(undefined, onData);

  useEffect(() => {
    if (!error) return;

    setVisible(true);
    const timeout = setTimeout(() => {
      setError('');
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [error]);

  return visible ? (
    <div
    //   position="fixed"
    //   left="50%"
    //   textAlign="center"
    //   transform="translateX(-50%)"
    //   paddingX="4px"
    //   top="4rem"
    //   borderRadius="4px"
    //   bgColor="#A52A2A"
	className="fixed text-center px-1 py-1 bg-red-600 rounded-md top-4 left-1/2 transform -translate-x-1/2"
    >
      {error}
    </div>
  ) : (
    <> </>
  );
};