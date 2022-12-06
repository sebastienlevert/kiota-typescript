import {DeleteUserFromSharedAppleDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDevicePostRequestBody(writer: SerializationWriter, deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName);
}
