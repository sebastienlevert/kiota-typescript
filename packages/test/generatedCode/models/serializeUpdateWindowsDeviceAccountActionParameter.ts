import {UpdateWindowsDeviceAccountActionParameter} from './index';
import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateWindowsDeviceAccountActionParameter(writer: SerializationWriter, updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter | undefined = {}) : void {
            writer.writeBooleanValue("calendarSyncEnabled", updateWindowsDeviceAccountActionParameter.calendarSyncEnabled);
            writer.writeObjectValueFromMethod("deviceAccount", updateWindowsDeviceAccountActionParameter.deviceAccount as any, serializeWindowsDeviceAccount);
            writer.writeStringValue("deviceAccountEmail", updateWindowsDeviceAccountActionParameter.deviceAccountEmail);
            writer.writeStringValue("exchangeServer", updateWindowsDeviceAccountActionParameter.exchangeServer);
            writer.writeStringValue("@odata.type", updateWindowsDeviceAccountActionParameter.odataType);
            writer.writeBooleanValue("passwordRotationEnabled", updateWindowsDeviceAccountActionParameter.passwordRotationEnabled);
            writer.writeStringValue("sessionInitiationProtocalAddress", updateWindowsDeviceAccountActionParameter.sessionInitiationProtocalAddress);
}
