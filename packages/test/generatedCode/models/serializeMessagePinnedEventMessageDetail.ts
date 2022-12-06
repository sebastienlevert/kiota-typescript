import {MessagePinnedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessagePinnedEventMessageDetail(writer: SerializationWriter, messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, messagePinnedEventMessageDetail)
            writer.writeDateValue("eventDateTime", messagePinnedEventMessageDetail.eventDateTime);
            writer.writeObjectValueFromMethod("initiator", messagePinnedEventMessageDetail.initiator as any, serializeIdentitySet);
}
