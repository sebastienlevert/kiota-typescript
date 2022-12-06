import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {deserializeIntoIosMinimumOperatingSystem} from './deserializeIntoIosMinimumOperatingSystem';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {IosLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobApp(iosLobApp: IosLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(iosLobApp),
        "applicableDeviceType": n => { iosLobApp.applicableDeviceType = n.getObject(deserializeIntoIosDeviceType) as any ; },
        "buildNumber": n => { iosLobApp.buildNumber = n.getStringValue() as any ; },
        "bundleId": n => { iosLobApp.bundleId = n.getStringValue() as any ; },
        "expirationDateTime": n => { iosLobApp.expirationDateTime = n.getDateValue() as any ; },
        "minimumSupportedOperatingSystem": n => { iosLobApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoIosMinimumOperatingSystem) as any ; },
        "versionNumber": n => { iosLobApp.versionNumber = n.getStringValue() as any ; },
    }
}
