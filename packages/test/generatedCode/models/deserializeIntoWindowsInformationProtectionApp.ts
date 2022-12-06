import {WindowsInformationProtectionApp} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionApp: WindowsInformationProtectionApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "denied": n => { windowsInformationProtectionApp.denied = n.getBooleanValue() as any ; },
        "description": n => { windowsInformationProtectionApp.description = n.getStringValue() as any ; },
        "displayName": n => { windowsInformationProtectionApp.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { windowsInformationProtectionApp.odataType = n.getStringValue() as any ; },
        "productName": n => { windowsInformationProtectionApp.productName = n.getStringValue() as any ; },
        "publisherName": n => { windowsInformationProtectionApp.publisherName = n.getStringValue() as any ; },
    }
}
