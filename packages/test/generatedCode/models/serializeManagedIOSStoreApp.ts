import {ManagedIOSStoreApp} from './index';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeManagedApp} from './serializeManagedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSStoreApp(writer: SerializationWriter, managedIOSStoreApp: ManagedIOSStoreApp | undefined = {}) : void {
        serializeManagedApp(writer, managedIOSStoreApp)
            writer.writeObjectValueFromMethod("applicableDeviceType", managedIOSStoreApp.applicableDeviceType as any, serializeIosDeviceType);
            writer.writeStringValue("appStoreUrl", managedIOSStoreApp.appStoreUrl);
            writer.writeStringValue("bundleId", managedIOSStoreApp.bundleId);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", managedIOSStoreApp.minimumSupportedOperatingSystem as any, serializeIosMinimumOperatingSystem);
}
