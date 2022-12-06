import {MacOSLobApp} from './index';
import {serializeMacOSLobChildApp} from './serializeMacOSLobChildApp';
import {serializeMacOSMinimumOperatingSystem} from './serializeMacOSMinimumOperatingSystem';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSLobApp(writer: SerializationWriter, macOSLobApp: MacOSLobApp | undefined = {}) : void {
        serializeMobileLobApp(writer, macOSLobApp)
            writer.writeStringValue("buildNumber", macOSLobApp.buildNumber);
            writer.writeStringValue("bundleId", macOSLobApp.bundleId);
            writer.writeCollectionOfObjectValuesFromMethod("childApps", macOSLobApp.childApps as any, serializeMacOSLobChildApp);
            writer.writeBooleanValue("ignoreVersionDetection", macOSLobApp.ignoreVersionDetection);
            writer.writeBooleanValue("installAsManaged", macOSLobApp.installAsManaged);
            writer.writeCollectionOfPrimitiveValues<string>("md5Hash", macOSLobApp.md5Hash);
            writer.writeNumberValue("md5HashChunkSize", macOSLobApp.md5HashChunkSize);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", macOSLobApp.minimumSupportedOperatingSystem as any, serializeMacOSMinimumOperatingSystem);
            writer.writeStringValue("versionNumber", macOSLobApp.versionNumber);
}
