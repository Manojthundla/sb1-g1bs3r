import { Video, Comment } from '../models/video';

export const mockVideos: Video[] = [
    {
        id: '1',
        title: 'Building Apps with NativeScript',
        thumbnail: 'https://img.youtube.com/vi/sample1/maxresdefault.jpg',
        channel: 'Tech Channel',
        channelAvatar: '~/images/avatar1.png',
        views: 150000,
        timestamp: new Date('2024-01-15'),
        duration: '12:34',
        description: 'Learn how to build cross-platform mobile apps using NativeScript...'
    },
    {
        id: '2',
        title: 'Mobile Development Tutorial',
        thumbnail: 'https://img.youtube.com/vi/sample2/maxresdefault.jpg',
        channel: 'Code Masters',
        channelAvatar: '~/images/avatar2.png',
        views: 75000,
        timestamp: new Date('2024-01-10'),
        duration: '8:21',
        description: 'Complete guide to mobile development...'
    }
];

export const mockComments: { [key: string]: Comment[] } = {
    '1': [
        {
            id: '1',
            user: 'John Dev',
            userAvatar: '~/images/user1.png',
            text: 'Great tutorial! Very helpful.',
            likes: 123,
            timestamp: new Date('2024-01-16')
        },
        {
            id: '2',
            user: 'Sarah Coder',
            userAvatar: '~/images/user2.png',
            text: 'Thanks for sharing!',
            likes: 45,
            timestamp: new Date('2024-01-17')
        }
    ]
};