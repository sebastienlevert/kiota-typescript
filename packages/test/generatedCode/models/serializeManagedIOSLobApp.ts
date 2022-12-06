import {ManagedIOSLobApp} from './index';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeManagedMobileLobApp} from './serializeManagedMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSLobApp(writer: SerializationWriter, managedIOSLobApp: ManagedIOSLobApp | undefined = {}) : void {
        serializeManagedMobileLobApp(writer, managedIOSLobApp)
            writer.writeObjectValueFromMethod("applicableDeviceType", managedIOSLobApp.applicableDeviceType as any, serializeIosDeviceType);
            writer.writeStringValue("buildNumber", managedIOSLobApp.buildNumber);
            writer.writeStringValue("bundleId", managedIOSLobApp.bundleId);
            writer.writeDateValue("expirationDateTime", managedIOSLobApp.expirationDateTime);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", managedIOSLobApp.minimumSupportedOperatingSystem as any, serializeIosMinimumOperatingSystem);
            writer.writeStringValue("versionNumber", managedIOSLobApp.versionNumber);
}
