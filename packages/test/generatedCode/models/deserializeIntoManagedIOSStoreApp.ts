import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {deserializeIntoIosMinimumOperatingSystem} from './deserializeIntoIosMinimumOperatingSystem';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {ManagedIOSStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSStoreApp(managedIOSStoreApp: ManagedIOSStoreApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedIOSStoreApp),
        "applicableDeviceType": n => { managedIOSStoreApp.applicableDeviceType = n.getObject(deserializeIntoIosDeviceType) as any ; },
        "appStoreUrl": n => { managedIOSStoreApp.appStoreUrl = n.getStringValue() as any ; },
        "bundleId": n => { managedIOSStoreApp.bundleId = n.getStringValue() as any ; },
        "minimumSupportedOperatingSystem": n => { managedIOSStoreApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoIosMinimumOperatingSystem) as any ; },
    }
}
