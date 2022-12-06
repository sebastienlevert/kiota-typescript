import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody(wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceTag": n => { wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag = n.getStringValue() as any ; },
    }
}
