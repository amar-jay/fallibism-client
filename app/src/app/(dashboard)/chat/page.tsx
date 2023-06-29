// chat like page
import { Button } from '@/components/ui/button';
import { ChatBubble } from '@/components/ui/chat-bubble';
import { Input } from '@/components/ui/input';
import * as React from 'react';

export default async function ChatPage() {
	  return (
	<div className="flex flex-col h-screen lg:px-16 sm:px-4">
		<div className="flex flex-col flex-1 overflow-hidden">
			<ChatBubble message='Hello' />
			<ChatBubble message='Hello' isMine/>
		</div>
		<div className="flex flex-row overflow-hidden py-5">
			<Input type="text" placeholder="Search" className='w-full'/>
			<Button variant='default' className='ml-2'>Send</Button>
		</div>
	</div>
	  )
}
