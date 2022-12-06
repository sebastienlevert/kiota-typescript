import {AndroidStoreApp} from './index';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidStoreApp(writer: SerializationWriter, androidStoreApp: AndroidStoreApp | undefined = {}) : void {
        serializeMobileApp(writer, androidStoreApp)
            writer.writeStringValue("appStoreUrl", androidStoreApp.appStoreUrl);
            writer.writeObjectValueFromMethod("minimumSupportedOperatingSystem", androidStoreApp.minimumSupportedOperatingSystem as any, serializeAndroidMinimumOperatingSystem);
            writer.writeStringValue("packageId", androidStoreApp.packageId);
}
