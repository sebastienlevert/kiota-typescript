import {SetMobileDeviceManagementAuthorityResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetMobileDeviceManagementAuthorityResponse(setMobileDeviceManagementAuthorityResponse: SetMobileDeviceManagementAuthorityResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { setMobileDeviceManagementAuthorityResponse.value = n.getNumberValue() as any ; },
    }
}
