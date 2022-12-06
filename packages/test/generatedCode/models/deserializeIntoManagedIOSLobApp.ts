import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {deserializeIntoIosMinimumOperatingSystem} from './deserializeIntoIosMinimumOperatingSystem';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {ManagedIOSLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSLobApp(managedIOSLobApp: ManagedIOSLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedMobileLobApp(managedIOSLobApp),
        "applicableDeviceType": n => { managedIOSLobApp.applicableDeviceType = n.getObject(deserializeIntoIosDeviceType) as any ; },
        "buildNumber": n => { managedIOSLobApp.buildNumber = n.getStringValue() as any ; },
        "bundleId": n => { managedIOSLobApp.bundleId = n.getStringValue() as any ; },
        "expirationDateTime": n => { managedIOSLobApp.expirationDateTime = n.getDateValue() as any ; },
        "minimumSupportedOperatingSystem": n => { managedIOSLobApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoIosMinimumOperatingSystem) as any ; },
        "versionNumber": n => { managedIOSLobApp.versionNumber = n.getStringValue() as any ; },
    }
}
