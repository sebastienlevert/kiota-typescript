import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {deserializeIntoIosHomeScreenPage} from './deserializeIntoIosHomeScreenPage';
import {deserializeIntoIosNotificationSettings} from './deserializeIntoIosNotificationSettings';
import {IosDeviceFeaturesConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosDeviceFeaturesConfiguration(iosDeviceFeaturesConfiguration: IosDeviceFeaturesConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAppleDeviceFeaturesConfigurationBase(iosDeviceFeaturesConfiguration),
        "assetTagTemplate": n => { iosDeviceFeaturesConfiguration.assetTagTemplate = n.getStringValue() as any ; },
        "homeScreenDockIcons": n => { iosDeviceFeaturesConfiguration.homeScreenDockIcons = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenItem) as any ; },
        "homeScreenPages": n => { iosDeviceFeaturesConfiguration.homeScreenPages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenPage) as any ; },
        "lockScreenFootnote": n => { iosDeviceFeaturesConfiguration.lockScreenFootnote = n.getStringValue() as any ; },
        "notificationSettings": n => { iosDeviceFeaturesConfiguration.notificationSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosNotificationSettings) as any ; },
    }
}
