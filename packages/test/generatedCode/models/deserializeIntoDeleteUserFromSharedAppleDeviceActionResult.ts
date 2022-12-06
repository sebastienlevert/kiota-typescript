import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {DeleteUserFromSharedAppleDeviceActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteUserFromSharedAppleDeviceActionResult(deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(deleteUserFromSharedAppleDeviceActionResult),
        "userPrincipalName": n => { deleteUserFromSharedAppleDeviceActionResult.userPrincipalName = n.getStringValue() as any ; },
    }
}
