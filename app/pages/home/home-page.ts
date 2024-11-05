import { NavigatedData, Page } from '@nativescript/core';
import { HomeViewModel } from './home-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function onVideoTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;
    
    page.frame.navigate({
        moduleName: "pages/video/video-page",
        context: { videoId: tappedItem.id }
    });
}