import {WindowsDeviceAccount} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceAccount(windowsDeviceAccount: WindowsDeviceAccount | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsDeviceAccount.odataType = n.getStringValue() as any ; },
        "password": n => { windowsDeviceAccount.password = n.getStringValue() as any ; },
    }
}
