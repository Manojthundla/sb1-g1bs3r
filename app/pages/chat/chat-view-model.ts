import { Observable } from '@nativescript/core';
import { Message } from '../../models/chat';
import { mockMessages } from '../../data/mock-data';

export class ChatViewModel extends Observable {
    private _messages: Message[];
    private _chatId: string;
    private _chatName: string;
    private _newMessage: string = '';

    constructor(chatId: string, chatName: string) {
        super();
        this._chatId = chatId;
        this._chatName = chatName;
        this._messages = mockMessages[chatId] || [];
    }

    get messages(): Message[] {
        return this._messages;
    }

    get chatName(): string {
        return this._chatName;
    }

    get newMessage(): string {
        return this._newMessage;
    }

    set newMessage(value: string) {
        if (this._newMessage !== value) {
            this._newMessage = value;
            this.notifyPropertyChange('newMessage', value);
        }
    }

    onSendMessage() {
        if (this._newMessage.trim()) {
            const newMsg: Message = {
                id: Date.now().toString(),
                text: this._newMessage,
                sender: 'me',
                timestamp: new Date(),
                isSent: true
            };

            this._messages.push(newMsg);
            this.notifyPropertyChange('messages', this._messages);
            this.newMessage = '';
        }
    }
}