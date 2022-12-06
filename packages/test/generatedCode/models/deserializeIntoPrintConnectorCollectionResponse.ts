import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintConnector} from './deserializeIntoPrintConnector';
import {PrintConnectorCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintConnectorCollectionResponse(printConnectorCollectionResponse: PrintConnectorCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printConnectorCollectionResponse),
        "value": n => { printConnectorCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintConnector) as any ; },
    }
}
