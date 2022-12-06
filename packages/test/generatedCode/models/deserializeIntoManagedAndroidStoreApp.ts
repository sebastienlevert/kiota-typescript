import {deserializeIntoAndroidMinimumOperatingSystem} from './deserializeIntoAndroidMinimumOperatingSystem';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {ManagedAndroidStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidStoreApp(managedAndroidStoreApp: ManagedAndroidStoreApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedAndroidStoreApp),
        "appStoreUrl": n => { managedAndroidStoreApp.appStoreUrl = n.getStringValue() as any ; },
        "minimumSupportedOperatingSystem": n => { managedAndroidStoreApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoAndroidMinimumOperatingSystem) as any ; },
        "packageId": n => { managedAndroidStoreApp.packageId = n.getStringValue() as any ; },
    }
}
