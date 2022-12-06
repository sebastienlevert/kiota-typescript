import {DeleteUserFromSharedAppleDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody(deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "userPrincipalName": n => { deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName = n.getStringValue() as any ; },
    }
}
