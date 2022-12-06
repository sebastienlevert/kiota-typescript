import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSLobChildApp} from './deserializeIntoMacOSLobChildApp';
import {MacOSLobChildAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobChildAppCollectionResponse(macOSLobChildAppCollectionResponse: MacOSLobChildAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSLobChildAppCollectionResponse),
        "value": n => { macOSLobChildAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSLobChildApp) as any ; },
    }
}
