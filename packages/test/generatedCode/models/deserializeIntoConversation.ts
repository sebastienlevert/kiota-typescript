import {deserializeIntoConversationThread} from './deserializeIntoConversationThread';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Conversation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversation(conversation: Conversation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversation),
        "hasAttachments": n => { conversation.hasAttachments = n.getBooleanValue() as any ; },
        "lastDeliveredDateTime": n => { conversation.lastDeliveredDateTime = n.getDateValue() as any ; },
        "preview": n => { conversation.preview = n.getStringValue() as any ; },
        "threads": n => { conversation.threads = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationThread) as any ; },
        "topic": n => { conversation.topic = n.getStringValue() as any ; },
        "uniqueSenders": n => { conversation.uniqueSenders = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
