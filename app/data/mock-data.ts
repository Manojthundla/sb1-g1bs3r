import { Chat, Message } from '../models/chat';

export const mockChats: Chat[] = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        timestamp: new Date(),
        unreadCount: 2,
        avatar: '~/images/avatar-placeholder.png'
    },
    {
        id: '2',
        name: 'Jane Smith',
        lastMessage: 'See you tomorrow!',
        timestamp: new Date(),
        unreadCount: 0,
        avatar: '~/images/avatar-placeholder.png'
    }
];

export const mockMessages: { [key: string]: Message[] } = {
    '1': [
        {
            id: '1',
            text: 'Hey, how are you?',
            sender: 'John Doe',
            timestamp: new Date(),
            isSent: false
        },
        {
            id: '2',
            text: "I'm good, thanks!",
            sender: 'me',
            timestamp: new Date(),
            isSent: true
        }
    ]
};