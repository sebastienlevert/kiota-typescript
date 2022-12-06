import {DeleteUserFromSharedAppleDeviceActionResult} from './index';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDeviceActionResult(writer: SerializationWriter, deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {}) : void {
        serializeDeviceActionResult(writer, deleteUserFromSharedAppleDeviceActionResult)
            writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDeviceActionResult.userPrincipalName);
}
