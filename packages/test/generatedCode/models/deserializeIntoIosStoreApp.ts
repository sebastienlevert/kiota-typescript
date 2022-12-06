import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {deserializeIntoIosMinimumOperatingSystem} from './deserializeIntoIosMinimumOperatingSystem';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {IosStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreApp(iosStoreApp: IosStoreApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosStoreApp),
        "applicableDeviceType": n => { iosStoreApp.applicableDeviceType = n.getObject(deserializeIntoIosDeviceType) as any ; },
        "appStoreUrl": n => { iosStoreApp.appStoreUrl = n.getStringValue() as any ; },
        "bundleId": n => { iosStoreApp.bundleId = n.getStringValue() as any ; },
        "minimumSupportedOperatingSystem": n => { iosStoreApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoIosMinimumOperatingSystem) as any ; },
    }
}
