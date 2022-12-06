import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInvitedUserMessageInfo} from './deserializeIntoInvitedUserMessageInfo';
import {deserializeIntoUser} from './deserializeIntoUser';
import {Invitation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitation(invitation: Invitation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(invitation),
        "invitedUser": n => { invitation.invitedUser = n.getObject(deserializeIntoUser) as any ; },
        "invitedUserDisplayName": n => { invitation.invitedUserDisplayName = n.getStringValue() as any ; },
        "invitedUserEmailAddress": n => { invitation.invitedUserEmailAddress = n.getStringValue() as any ; },
        "invitedUserMessageInfo": n => { invitation.invitedUserMessageInfo = n.getObject(deserializeIntoInvitedUserMessageInfo) as any ; },
        "invitedUserType": n => { invitation.invitedUserType = n.getStringValue() as any ; },
        "inviteRedeemUrl": n => { invitation.inviteRedeemUrl = n.getStringValue() as any ; },
        "inviteRedirectUrl": n => { invitation.inviteRedirectUrl = n.getStringValue() as any ; },
        "resetRedemption": n => { invitation.resetRedemption = n.getBooleanValue() as any ; },
        "sendInvitationMessage": n => { invitation.sendInvitationMessage = n.getBooleanValue() as any ; },
        "status": n => { invitation.status = n.getStringValue() as any ; },
    }
}
