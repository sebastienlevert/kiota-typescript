import {AndroidLobApp} from './index';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidLobApp(writer: SerializationWriter, androidLobApp: AndroidLobApp | undefined = {}) : void {
        serializeMobileLobApp(writer, androidLobApp)
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", androidLobApp.minimumSupportedOperatingSystem as any, serializeAndroidMinimumOperatingSystem);
            writer.writeStringValue("packageId", androidLobApp.packageId);
            writer.writeStringValue("versionCode", androidLobApp.versionCode);
            writer.writeStringValue("versionName", androidLobApp.versionName);
}
