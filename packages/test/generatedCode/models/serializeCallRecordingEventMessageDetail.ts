import {CallRecordingStatus} from './callRecordingStatus';
import {CallRecordingEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecordingEventMessageDetail(writer: SerializationWriter, callRecordingEventMessageDetail: CallRecordingEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, callRecordingEventMessageDetail)
            writer.writeStringValue("callId", callRecordingEventMessageDetail.callId);
            writer.writeStringValue("callRecordingDisplayName", callRecordingEventMessageDetail.callRecordingDisplayName);
            writer.writeDurationValue("callRecordingDuration", callRecordingEventMessageDetail.callRecordingDuration);
            writer.writeEnumValue<CallRecordingStatus>("callRecordingStatus", callRecordingEventMessageDetail.callRecordingStatus);
            writer.writeStringValue("callRecordingUrl", callRecordingEventMessageDetail.callRecordingUrl);
            writer.writeObjectValueFromMethod("initiator", callRecordingEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("meetingOrganizer", callRecordingEventMessageDetail.meetingOrganizer as any, serializeIdentitySet);
}
