import {WindowsInformationProtectionStoreApp} from './index';
import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionStoreApp(writer: SerializationWriter, windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {}) : void {
        serializeWindowsInformationProtectionApp(writer, windowsInformationProtectionStoreApp)
}
