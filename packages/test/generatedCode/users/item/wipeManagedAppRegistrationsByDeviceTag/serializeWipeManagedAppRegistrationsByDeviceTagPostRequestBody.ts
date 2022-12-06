import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody(writer: SerializationWriter, wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("deviceTag", wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag);
}
