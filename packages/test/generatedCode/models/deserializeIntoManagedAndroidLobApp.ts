import {deserializeIntoAndroidMinimumOperatingSystem} from './deserializeIntoAndroidMinimumOperatingSystem';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {ManagedAndroidLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidLobApp(managedAndroidLobApp: ManagedAndroidLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedMobileLobApp(managedAndroidLobApp),
        "minimumSupportedOperatingSystem": n => { managedAndroidLobApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoAndroidMinimumOperatingSystem) as any ; },
        "packageId": n => { managedAndroidLobApp.packageId = n.getStringValue() as any ; },
        "versionCode": n => { managedAndroidLobApp.versionCode = n.getStringValue() as any ; },
        "versionName": n => { managedAndroidLobApp.versionName = n.getStringValue() as any ; },
    }
}
