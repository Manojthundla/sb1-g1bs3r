import { Observable } from '@nativescript/core';
import { mockVideos, mockComments } from '../../data/mock-videos';
import { Video, Comment } from '../../models/video';
import { formatViews, formatTimeAgo } from '../../utils/format';

export class VideoViewModel extends Observable {
    private _video: Video;
    private _comments: Comment[];

    constructor(videoId: string) {
        super();
        this._video = mockVideos.find(v => v.id === videoId);
        this._comments = mockComments[videoId] || [];
    }

    get video(): Video {
        return this._video;
    }

    get comments(): Comment[] {
        return this._comments;
    }

    formatViews(views: number): string {
        return formatViews(views);
    }

    formatTimeAgo(date: Date): string {
        return formatTimeAgo(date);
    }
}