import { Observable } from '@nativescript/core';
import { mockVideos } from '../../data/mock-videos';
import { Video } from '../../models/video';
import { formatViews, formatTimeAgo } from '../../utils/format';

export class HomeViewModel extends Observable {
    private _videos: Video[];

    constructor() {
        super();
        this._videos = mockVideos;
    }

    get videos(): Video[] {
        return this._videos;
    }

    formatViews(views: number): string {
        return formatViews(views);
    }

    formatTimeAgo(date: Date): string {
        return formatTimeAgo(date);
    }
}