import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {EndpointCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpointCollectionResponse(endpointCollectionResponse: EndpointCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(endpointCollectionResponse),
        "value": n => { endpointCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEndpoint) as any ; },
    }
}
