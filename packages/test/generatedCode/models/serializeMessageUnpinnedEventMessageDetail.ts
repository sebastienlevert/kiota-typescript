import {MessageUnpinnedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageUnpinnedEventMessageDetail(writer: SerializationWriter, messageUnpinnedEventMessageDetail: MessageUnpinnedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, messageUnpinnedEventMessageDetail)
            writer.writeDateValue("eventDateTime", messageUnpinnedEventMessageDetail.eventDateTime);
            writer.writeObjectValueFromMethod("initiator", messageUnpinnedEventMessageDetail.initiator as any, serializeIdentitySet);
}
