import {MeetingParticipantInfo} from './index';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipantInfo(writer: SerializationWriter, meetingParticipantInfo: MeetingParticipantInfo | undefined = {}) : void {
            writer.writeObjectValueFromMethod("identity", meetingParticipantInfo.identity as any, serializeIdentitySet);
            writer.writeEnumValue<OnlineMeetingRole>("role", meetingParticipantInfo.role);
            writer.writeStringValue("upn", meetingParticipantInfo.upn);
}
