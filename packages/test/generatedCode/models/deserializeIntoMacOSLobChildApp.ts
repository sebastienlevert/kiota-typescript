import {MacOSLobChildApp} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobChildApp(macOSLobChildApp: MacOSLobChildApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "buildNumber": n => { macOSLobChildApp.buildNumber = n.getStringValue() as any ; },
        "bundleId": n => { macOSLobChildApp.bundleId = n.getStringValue() as any ; },
        "@odata.type": n => { macOSLobChildApp.odataType = n.getStringValue() as any ; },
        "versionNumber": n => { macOSLobChildApp.versionNumber = n.getStringValue() as any ; },
    }
}
