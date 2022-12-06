import {WindowsDeviceAccount} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceAccount(writer: SerializationWriter, windowsDeviceAccount: WindowsDeviceAccount | undefined = {}) : void {
            writer.writeStringValue("@odata.type", windowsDeviceAccount.odataType);
            writer.writeStringValue("password", windowsDeviceAccount.password);
}
