import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {WindowsInformationProtectionStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionStoreApp(windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionStoreApp),
    }
}
