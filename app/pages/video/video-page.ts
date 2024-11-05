import { NavigatedData, Page } from '@nativescript/core';
import { VideoViewModel } from './video-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    
    page.bindingContext = new VideoViewModel(context.videoId);
}