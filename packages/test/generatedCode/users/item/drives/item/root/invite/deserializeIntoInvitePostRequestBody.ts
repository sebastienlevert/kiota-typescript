import {deserializeIntoDriveRecipient} from '../../../../../../models/deserializeIntoDriveRecipient';
import {InvitePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { invitePostRequestBody.expirationDateTime = n.getStringValue() as any ; },
        "message": n => { invitePostRequestBody.message = n.getStringValue() as any ; },
        "password": n => { invitePostRequestBody.password = n.getStringValue() as any ; },
        "recipients": n => { invitePostRequestBody.recipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveRecipient) as any ; },
        "requireSignIn": n => { invitePostRequestBody.requireSignIn = n.getBooleanValue() as any ; },
        "retainInheritedPermissions": n => { invitePostRequestBody.retainInheritedPermissions = n.getBooleanValue() as any ; },
        "roles": n => { invitePostRequestBody.roles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sendInvitation": n => { invitePostRequestBody.sendInvitation = n.getBooleanValue() as any ; },
    }
}
