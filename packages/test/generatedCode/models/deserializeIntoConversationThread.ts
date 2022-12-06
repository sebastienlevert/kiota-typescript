import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPost} from './deserializeIntoPost';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {ConversationThread} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationThread(conversationThread: ConversationThread | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversationThread),
        "ccRecipients": n => { conversationThread.ccRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "hasAttachments": n => { conversationThread.hasAttachments = n.getBooleanValue() as any ; },
        "isLocked": n => { conversationThread.isLocked = n.getBooleanValue() as any ; },
        "lastDeliveredDateTime": n => { conversationThread.lastDeliveredDateTime = n.getDateValue() as any ; },
        "posts": n => { conversationThread.posts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPost) as any ; },
        "preview": n => { conversationThread.preview = n.getStringValue() as any ; },
        "topic": n => { conversationThread.topic = n.getStringValue() as any ; },
        "toRecipients": n => { conversationThread.toRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "uniqueSenders": n => { conversationThread.uniqueSenders = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
