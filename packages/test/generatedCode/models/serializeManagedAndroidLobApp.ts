import {ManagedAndroidLobApp} from './index';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeManagedMobileLobApp} from './serializeManagedMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidLobApp(writer: SerializationWriter, managedAndroidLobApp: ManagedAndroidLobApp | undefined = {}) : void {
        serializeManagedMobileLobApp(writer, managedAndroidLobApp)
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", managedAndroidLobApp.minimumSupportedOperatingSystem as any, serializeAndroidMinimumOperatingSystem);
            writer.writeStringValue("packageId", managedAndroidLobApp.packageId);
            writer.writeStringValue("versionCode", managedAndroidLobApp.versionCode);
            writer.writeStringValue("versionName", managedAndroidLobApp.versionName);
}
