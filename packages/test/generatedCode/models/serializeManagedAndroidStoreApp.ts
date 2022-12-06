import {ManagedAndroidStoreApp} from './index';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeManagedApp} from './serializeManagedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidStoreApp(writer: SerializationWriter, managedAndroidStoreApp: ManagedAndroidStoreApp | undefined = {}) : void {
        serializeManagedApp(writer, managedAndroidStoreApp)
            writer.writeStringValue("appStoreUrl", managedAndroidStoreApp.appStoreUrl);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", managedAndroidStoreApp.minimumSupportedOperatingSystem as any, serializeAndroidMinimumOperatingSystem);
            writer.writeStringValue("packageId", managedAndroidStoreApp.packageId);
}
