import { NavigatedData, Page } from '@nativescript/core';
import { ChatViewModel } from './chat-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    
    page.bindingContext = new ChatViewModel(context.chatId, context.name);
}