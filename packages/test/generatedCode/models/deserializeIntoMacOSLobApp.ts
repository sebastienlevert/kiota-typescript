import {deserializeIntoMacOSLobChildApp} from './deserializeIntoMacOSLobChildApp';
import {deserializeIntoMacOSMinimumOperatingSystem} from './deserializeIntoMacOSMinimumOperatingSystem';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {MacOSLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobApp(macOSLobApp: MacOSLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(macOSLobApp),
        "buildNumber": n => { macOSLobApp.buildNumber = n.getStringValue() as any ; },
        "bundleId": n => { macOSLobApp.bundleId = n.getStringValue() as any ; },
        "childApps": n => { macOSLobApp.childApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSLobChildApp) as any ; },
        "ignoreVersionDetection": n => { macOSLobApp.ignoreVersionDetection = n.getBooleanValue() as any ; },
        "installAsManaged": n => { macOSLobApp.installAsManaged = n.getBooleanValue() as any ; },
        "md5Hash": n => { macOSLobApp.md5Hash = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "md5HashChunkSize": n => { macOSLobApp.md5HashChunkSize = n.getNumberValue() as any ; },
        "minimumSupportedOperatingSystem": n => { macOSLobApp.minimumSupportedOperatingSystem = n.getObject(deserializeIntoMacOSMinimumOperatingSystem) as any ; },
        "versionNumber": n => { macOSLobApp.versionNumber = n.getStringValue() as any ; },
    }
}
