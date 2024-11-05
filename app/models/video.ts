export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    channelAvatar: string;
    views: number;
    timestamp: Date;
    duration: string;
    description: string;
}

export interface Comment {
    id: string;
    user: string;
    userAvatar: string;
    text: string;
    likes: number;
    timestamp: Date;
}