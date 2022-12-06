import {SetMobileDeviceManagementAuthorityResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetMobileDeviceManagementAuthorityResponse(writer: SerializationWriter, setMobileDeviceManagementAuthorityResponse: SetMobileDeviceManagementAuthorityResponse | undefined = {}) : void {
            writer.writeNumberValue("value", setMobileDeviceManagementAuthorityResponse.value);
}
