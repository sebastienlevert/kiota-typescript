import {Invitation} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeInvitedUserMessageInfo} from './serializeInvitedUserMessageInfo';
import {serializeUser} from './serializeUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitation(writer: SerializationWriter, invitation: Invitation | undefined = {}) : void {
        serializeEntity(writer, invitation)
            writer.writeObjectValueFromMethod("invitedUser", invitation.invitedUser as any, serializeUser);
            writer.writeStringValue("invitedUserDisplayName", invitation.invitedUserDisplayName);
            writer.writeStringValue("invitedUserEmailAddress", invitation.invitedUserEmailAddress);
            writer.writeObjectValueFromMethod("invitedUserMessageInfo", invitation.invitedUserMessageInfo as any, serializeInvitedUserMessageInfo);
            writer.writeStringValue("invitedUserType", invitation.invitedUserType);
            writer.writeStringValue("inviteRedeemUrl", invitation.inviteRedeemUrl);
            writer.writeStringValue("inviteRedirectUrl", invitation.inviteRedirectUrl);
            writer.writeBooleanValue("resetRedemption", invitation.resetRedemption);
            writer.writeBooleanValue("sendInvitationMessage", invitation.sendInvitationMessage);
            writer.writeStringValue("status", invitation.status);
}
