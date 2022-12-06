import {CallEndedEventMessageDetail} from './index';
import {serializeCallParticipantInfo} from './serializeCallParticipantInfo';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallEndedEventMessageDetail(writer: SerializationWriter, callEndedEventMessageDetail: CallEndedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, callEndedEventMessageDetail)
            writer.writeDurationValue("callDuration", callEndedEventMessageDetail.callDuration);
            writer.writeEnumValue<TeamworkCallEventType>("callEventType", callEndedEventMessageDetail.callEventType);
            writer.writeStringValue("callId", callEndedEventMessageDetail.callId);
            writer.writeCollectionOfObjectValuesFromMethod("callParticipants", callEndedEventMessageDetail.callParticipants as any, serializeCallParticipantInfo);
            writer.writeObjectValueFromMethod("initiator", callEndedEventMessageDetail.initiator as any, serializeIdentitySet);
}
