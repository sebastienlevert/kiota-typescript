import {WindowsInformationProtectionApp} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionApp(writer: SerializationWriter, windowsInformationProtectionApp: WindowsInformationProtectionApp | undefined = {}) : void {
            writer.writeBooleanValue("denied", windowsInformationProtectionApp.denied);
            writer.writeStringValue("description", windowsInformationProtectionApp.description);
            writer.writeStringValue("displayName", windowsInformationProtectionApp.displayName);
            writer.writeStringValue("@odata.type", windowsInformationProtectionApp.odataType);
            writer.writeStringValue("productName", windowsInformationProtectionApp.productName);
            writer.writeStringValue("publisherName", windowsInformationProtectionApp.publisherName);
}
