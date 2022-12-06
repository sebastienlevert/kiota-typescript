import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {WindowsInformationProtectionDesktopApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionDesktopApp(windowsInformationProtectionDesktopApp: WindowsInformationProtectionDesktopApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionDesktopApp),
        "binaryName": n => { windowsInformationProtectionDesktopApp.binaryName = n.getStringValue() as any ; },
        "binaryVersionHigh": n => { windowsInformationProtectionDesktopApp.binaryVersionHigh = n.getStringValue() as any ; },
        "binaryVersionLow": n => { windowsInformationProtectionDesktopApp.binaryVersionLow = n.getStringValue() as any ; },
    }
}
