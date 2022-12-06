import {deserializeIntoAndroidMinimumOperatingSystem} from './deserializeIntoAndroidMinimumOperatingSystem';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {AndroidLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidLobApp(androidLobApp: AndroidLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(androidLobApp),
        "minimumSupportedOperatingSystem": n => { androidLobApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoAndroidMinimumOperatingSystem) as any ; },
        "packageId": n => { androidLobApp.packageId = n.getStringValue() as any ; },
        "versionCode": n => { androidLobApp.versionCode = n.getStringValue() as any ; },
        "versionName": n => { androidLobApp.versionName = n.getStringValue() as any ; },
    }
}
