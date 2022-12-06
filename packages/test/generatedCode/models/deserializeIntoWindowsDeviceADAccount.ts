import {deserializeIntoWindowsDeviceAccount} from './deserializeIntoWindowsDeviceAccount';
import {WindowsDeviceADAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceADAccount(windowsDeviceADAccount: WindowsDeviceADAccount | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsDeviceAccount(windowsDeviceADAccount),
        "domainName": n => { windowsDeviceADAccount.domainName = n.getStringValue() as any ; },
        "userName": n => { windowsDeviceADAccount.userName = n.getStringValue() as any ; },
    }
}
