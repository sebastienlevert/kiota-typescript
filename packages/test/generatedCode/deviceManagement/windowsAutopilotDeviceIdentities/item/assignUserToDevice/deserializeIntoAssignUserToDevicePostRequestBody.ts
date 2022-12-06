import {AssignUserToDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignUserToDevicePostRequestBody(assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addressableUserName": n => { assignUserToDevicePostRequestBody.addressableUserName = n.getStringValue() as any ; },
        "userPrincipalName": n => { assignUserToDevicePostRequestBody.userPrincipalName = n.getStringValue() as any ; },
    }
}
