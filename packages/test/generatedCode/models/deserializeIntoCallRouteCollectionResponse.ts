import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCallRoute} from './deserializeIntoCallRoute';
import {CallRouteCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRouteCollectionResponse(callRouteCollectionResponse: CallRouteCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callRouteCollectionResponse),
        "value": n => { callRouteCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallRoute) as any ; },
    }
}
