import {IosStoreApp} from './index';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreApp(writer: SerializationWriter, iosStoreApp: IosStoreApp | undefined = {}) : void {
        serializeMobileApp(writer, iosStoreApp)
            writer.writeObjectValueFromMethod("applicableDeviceType", iosStoreApp.applicableDeviceType as any, serializeIosDeviceType);
            writer.writeStringValue("appStoreUrl", iosStoreApp.appStoreUrl);
            writer.writeStringValue("bundleId", iosStoreApp.bundleId);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", iosStoreApp.minimumSupportedOperatingSystem as any, serializeIosMinimumOperatingSystem);
}
