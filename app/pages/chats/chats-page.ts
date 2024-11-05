import { NavigatedData, Page } from '@nativescript/core';
import { ChatsViewModel } from './chats-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ChatsViewModel();
}

export function onChatTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;
    
    page.frame.navigate({
        moduleName: "pages/chat/chat-page",
        context: { chatId: tappedItem.id, name: tappedItem.name }
    });
}