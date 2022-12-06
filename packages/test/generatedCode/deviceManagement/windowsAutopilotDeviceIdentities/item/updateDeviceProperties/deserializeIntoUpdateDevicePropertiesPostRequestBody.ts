import {UpdateDevicePropertiesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateDevicePropertiesPostRequestBody(updateDevicePropertiesPostRequestBody: UpdateDevicePropertiesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addressableUserName": n => { updateDevicePropertiesPostRequestBody.addressableUserName = n.getStringValue() as any ; },
        "displayName": n => { updateDevicePropertiesPostRequestBody.displayName = n.getStringValue() as any ; },
        "groupTag": n => { updateDevicePropertiesPostRequestBody.groupTag = n.getStringValue() as any ; },
        "userPrincipalName": n => { updateDevicePropertiesPostRequestBody.userPrincipalName = n.getStringValue() as any ; },
    }
}
