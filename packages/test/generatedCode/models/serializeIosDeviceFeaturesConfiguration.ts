import {IosDeviceFeaturesConfiguration} from './index';
import {serializeAppleDeviceFeaturesConfigurationBase} from './serializeAppleDeviceFeaturesConfigurationBase';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {serializeIosHomeScreenPage} from './serializeIosHomeScreenPage';
import {serializeIosNotificationSettings} from './serializeIosNotificationSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosDeviceFeaturesConfiguration(writer: SerializationWriter, iosDeviceFeaturesConfiguration: IosDeviceFeaturesConfiguration | undefined = {}) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, iosDeviceFeaturesConfiguration)
            writer.writeStringValue("assetTagTemplate", iosDeviceFeaturesConfiguration.assetTagTemplate);
            writer.writeCollectionOfObjectValuesFromMethod("homeScreenDockIcons", iosDeviceFeaturesConfiguration.homeScreenDockIcons as any, serializeIosHomeScreenItem);
            writer.writeCollectionOfObjectValuesFromMethod("homeScreenPages", iosDeviceFeaturesConfiguration.homeScreenPages as any, serializeIosHomeScreenPage);
            writer.writeStringValue("lockScreenFootnote", iosDeviceFeaturesConfiguration.lockScreenFootnote);
            writer.writeCollectionOfObjectValuesFromMethod("notificationSettings", iosDeviceFeaturesConfiguration.notificationSettings as any, serializeIosNotificationSettings);
}
