import {InvitationParticipantInfo} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationParticipantInfo(writer: SerializationWriter, invitationParticipantInfo: InvitationParticipantInfo | undefined = {}) : void {
            writer.writeBooleanValue("hidden", invitationParticipantInfo.hidden);
            writer.writeObjectValueFromMethod("identity", invitationParticipantInfo.identity as any, serializeIdentitySet);
            writer.writeStringValue("@odata.type", invitationParticipantInfo.odataType);
            writer.writeStringValue("participantId", invitationParticipantInfo.participantId);
            writer.writeBooleanValue("removeFromDefaultAudioRoutingGroup", invitationParticipantInfo.removeFromDefaultAudioRoutingGroup);
            writer.writeStringValue("replacesCallId", invitationParticipantInfo.replacesCallId);
}
