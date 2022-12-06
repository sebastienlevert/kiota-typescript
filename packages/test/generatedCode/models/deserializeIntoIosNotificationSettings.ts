import {IosNotificationSettings} from './index';
import {IosNotificationAlertType} from './iosNotificationAlertType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNotificationSettings(iosNotificationSettings: IosNotificationSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alertType": n => { iosNotificationSettings.alertType = n.getEnumValue<IosNotificationAlertType>(IosNotificationAlertType) as any ; },
        "appName": n => { iosNotificationSettings.appName = n.getStringValue() as any ; },
        "badgesEnabled": n => { iosNotificationSettings.badgesEnabled = n.getBooleanValue() as any ; },
        "bundleID": n => { iosNotificationSettings.bundleID = n.getStringValue() as any ; },
        "enabled": n => { iosNotificationSettings.enabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { iosNotificationSettings.odataType = n.getStringValue() as any ; },
        "publisher": n => { iosNotificationSettings.publisher = n.getStringValue() as any ; },
        "showInNotificationCenter": n => { iosNotificationSettings.showInNotificationCenter = n.getBooleanValue() as any ; },
        "showOnLockScreen": n => { iosNotificationSettings.showOnLockScreen = n.getBooleanValue() as any ; },
        "soundsEnabled": n => { iosNotificationSettings.soundsEnabled = n.getBooleanValue() as any ; },
    }
}
