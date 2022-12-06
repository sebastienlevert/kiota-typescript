import {deserializeIntoAndroidMinimumOperatingSystem} from './deserializeIntoAndroidMinimumOperatingSystem';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {AndroidStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidStoreApp(androidStoreApp: AndroidStoreApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(androidStoreApp),
        "appStoreUrl": n => { androidStoreApp.appStoreUrl = n.getStringValue() as any ; },
        "minimumSupportedOperatingSystem": n => { androidStoreApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoAndroidMinimumOperatingSystem) as any ; },
        "packageId": n => { androidStoreApp.packageId = n.getStringValue() as any ; },
    }
}
