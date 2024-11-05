export interface Message {
    id: string;
    text: string;
    sender: string;
    timestamp: Date;
    isSent: boolean;
}

export interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: Date;
    unreadCount: number;
    avatar: string;
}