import {Windows10NetworkProxyServer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10NetworkProxyServer(windows10NetworkProxyServer: Windows10NetworkProxyServer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { windows10NetworkProxyServer.address = n.getStringValue() as any ; },
        "exceptions": n => { windows10NetworkProxyServer.exceptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { windows10NetworkProxyServer.odataType = n.getStringValue() as any ; },
        "useForLocalAddresses": n => { windows10NetworkProxyServer.useForLocalAddresses = n.getBooleanValue() as any ; },
    }
}
