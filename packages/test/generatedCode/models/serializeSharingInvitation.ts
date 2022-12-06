import {SharingInvitation} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharingInvitation(writer: SerializationWriter, sharingInvitation: SharingInvitation | undefined = {}) : void {
            writer.writeStringValue("email", sharingInvitation.email);
            writer.writeObjectValueFromMethod("invitedBy", sharingInvitation.invitedBy as any, serializeIdentitySet);
            writer.writeStringValue("@odata.type", sharingInvitation.odataType);
            writer.writeStringValue("redeemedBy", sharingInvitation.redeemedBy);
            writer.writeBooleanValue("signInRequired", sharingInvitation.signInRequired);
}
