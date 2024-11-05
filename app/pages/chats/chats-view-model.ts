import { Observable } from '@nativescript/core';
import { mockChats } from '../../data/mock-data';
import { Chat } from '../../models/chat';

export class ChatsViewModel extends Observable {
    private _chats: Chat[];

    constructor() {
        super();
        this._chats = mockChats;
    }

    get chats(): Chat[] {
        return this._chats;
    }
}