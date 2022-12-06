import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {InvitationParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitationParticipantInfo(invitationParticipantInfo: InvitationParticipantInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hidden": n => { invitationParticipantInfo.hidden = n.getBooleanValue() as any ; },
        "identity": n => { invitationParticipantInfo.identity = n.getObject(deserializeIntoIdentitySet) as any ; },
        "@odata.type": n => { invitationParticipantInfo.odataType = n.getStringValue() as any ; },
        "participantId": n => { invitationParticipantInfo.participantId = n.getStringValue() as any ; },
        "removeFromDefaultAudioRoutingGroup": n => { invitationParticipantInfo.removeFromDefaultAudioRoutingGroup = n.getBooleanValue() as any ; },
        "replacesCallId": n => { invitationParticipantInfo.replacesCallId = n.getStringValue() as any ; },
    }
}
