import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintServiceEndpoint} from './deserializeIntoPrintServiceEndpoint';
import {PrintServiceEndpointCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceEndpointCollectionResponse(printServiceEndpointCollectionResponse: PrintServiceEndpointCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printServiceEndpointCollectionResponse),
        "value": n => { printServiceEndpointCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintServiceEndpoint) as any ; },
    }
}
