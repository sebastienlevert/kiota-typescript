import {WindowsUniversalAppX} from './index';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {serializeWindowsMinimumOperatingSystem} from './serializeWindowsMinimumOperatingSystem';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppX(writer: SerializationWriter, windowsUniversalAppX: WindowsUniversalAppX | undefined = {}) : void {
        serializeMobileLobApp(writer, windowsUniversalAppX)
            writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", windowsUniversalAppX.applicableArchitectures);
            writer.writeEnumValue<WindowsDeviceType>("applicableDeviceTypes", windowsUniversalAppX.applicableDeviceTypes);
            writer.writeStringValue("identityName", windowsUniversalAppX.identityName);
            writer.writeStringValue("identityPublisherHash", windowsUniversalAppX.identityPublisherHash);
            writer.writeStringValue("identityResourceIdentifier", windowsUniversalAppX.identityResourceIdentifier);
            writer.writeStringValue("identityVersion", windowsUniversalAppX.identityVersion);
            writer.writeBooleanValue("isBundle", windowsUniversalAppX.isBundle);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", windowsUniversalAppX.minimumSupportedOperatingSystem as any, serializeWindowsMinimumOperatingSystem);
}
