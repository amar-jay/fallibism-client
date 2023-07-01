import React from 'react';
interface ChatPageProps {
	params: {
		id: string;
	}
}
export default function ChatPage({params}: ChatPageProps) {
	const { id } = params;
	return (
		<h1>Room {id}</h1>
	)
}