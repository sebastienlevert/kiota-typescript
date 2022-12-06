import {CallTranscriptEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscriptEventMessageDetail(writer: SerializationWriter, callTranscriptEventMessageDetail: CallTranscriptEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, callTranscriptEventMessageDetail)
            writer.writeStringValue("callId", callTranscriptEventMessageDetail.callId);
            writer.writeStringValue("callTranscriptICalUid", callTranscriptEventMessageDetail.callTranscriptICalUid);
            writer.writeObjectValueFromMethod("meetingOrganizer", callTranscriptEventMessageDetail.meetingOrganizer as any, serializeIdentitySet);
}
