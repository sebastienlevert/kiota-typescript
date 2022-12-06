import {IosLobApp} from './index';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosLobApp(writer: SerializationWriter, iosLobApp: IosLobApp | undefined = {}) : void {
        serializeMobileLobApp(writer, iosLobApp)
            writer.writeObjectValueFromMethod("applicableDeviceType", iosLobApp.applicableDeviceType as any, serializeIosDeviceType);
            writer.writeStringValue("buildNumber", iosLobApp.buildNumber);
            writer.writeStringValue("bundleId", iosLobApp.bundleId);
            writer.writeDateValue("expirationDateTime", iosLobApp.expirationDateTime);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", iosLobApp.minimumSupportedOperatingSystem as any, serializeIosMinimumOperatingSystem);
            writer.writeStringValue("versionNumber", iosLobApp.versionNumber);
}
