import {WindowsDeviceAzureADAccount} from './index';
import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceAzureADAccount(writer: SerializationWriter, windowsDeviceAzureADAccount: WindowsDeviceAzureADAccount | undefined = {}) : void {
        serializeWindowsDeviceAccount(writer, windowsDeviceAzureADAccount)
            writer.writeStringValue("userPrincipalName", windowsDeviceAzureADAccount.userPrincipalName);
}
