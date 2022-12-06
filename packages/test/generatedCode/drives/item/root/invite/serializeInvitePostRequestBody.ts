import {serializeDriveRecipient} from '../../../../models/serializeDriveRecipient';
import {InvitePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitePostRequestBody(writer: SerializationWriter, invitePostRequestBody: InvitePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("expirationDateTime", invitePostRequestBody.expirationDateTime);
            writer.writeStringValue("message", invitePostRequestBody.message);
            writer.writeStringValue("password", invitePostRequestBody.password);
            writer.writeCollectionOfObjectValuesFromMethod("recipients", invitePostRequestBody.recipients as any, serializeDriveRecipient);
            writer.writeBooleanValue("requireSignIn", invitePostRequestBody.requireSignIn);
            writer.writeBooleanValue("retainInheritedPermissions", invitePostRequestBody.retainInheritedPermissions);
            writer.writeCollectionOfPrimitiveValues<string>("roles", invitePostRequestBody.roles);
            writer.writeBooleanValue("sendInvitation", invitePostRequestBody.sendInvitation);
}
