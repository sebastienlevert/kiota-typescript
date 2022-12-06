import {deserializeIntoWindowsDeviceAccount} from './deserializeIntoWindowsDeviceAccount';
import {WindowsDeviceAzureADAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceAzureADAccount(windowsDeviceAzureADAccount: WindowsDeviceAzureADAccount | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsDeviceAccount(windowsDeviceAzureADAccount),
        "userPrincipalName": n => { windowsDeviceAzureADAccount.userPrincipalName = n.getStringValue() as any ; },
    }
}
