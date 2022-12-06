import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSLobApp} from './deserializeIntoMacOSLobApp';
import {MacOSLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobAppCollectionResponse(macOSLobAppCollectionResponse: MacOSLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSLobAppCollectionResponse),
        "value": n => { macOSLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSLobApp) as any ; },
    }
}
