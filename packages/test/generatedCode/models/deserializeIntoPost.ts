import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoMention} from './deserializeIntoMention';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {Importance} from './importance';
import {Post} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPost(post: Post | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(post),
        "attachments": n => { post.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
        "body": n => { post.body = n.getObject(deserializeIntoItemBody) as any ; },
        "conversationId": n => { post.conversationId = n.getStringValue() as any ; },
        "conversationThreadId": n => { post.conversationThreadId = n.getStringValue() as any ; },
        "extensions": n => { post.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "from": n => { post.from = n.getObject(deserializeIntoRecipient) as any ; },
        "hasAttachments": n => { post.hasAttachments = n.getBooleanValue() as any ; },
        "importance": n => { post.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "inReplyTo": n => { post.inReplyTo = n.getObject(deserializeIntoPost) as any ; },
        "mentions": n => { post.mentions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMention) as any ; },
        "multiValueExtendedProperties": n => { post.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "newParticipants": n => { post.newParticipants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "receivedDateTime": n => { post.receivedDateTime = n.getDateValue() as any ; },
        "sender": n => { post.sender = n.getObject(deserializeIntoRecipient) as any ; },
        "singleValueExtendedProperties": n => { post.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
    }
}
