import {WindowsDeviceADAccount} from './index';
import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceADAccount(writer: SerializationWriter, windowsDeviceADAccount: WindowsDeviceADAccount | undefined = {}) : void {
        serializeWindowsDeviceAccount(writer, windowsDeviceADAccount)
            writer.writeStringValue("domainName", windowsDeviceADAccount.domainName);
            writer.writeStringValue("userName", windowsDeviceADAccount.userName);
}
