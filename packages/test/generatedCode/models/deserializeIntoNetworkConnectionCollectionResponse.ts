import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoNetworkConnection} from './deserializeIntoNetworkConnection';
import {NetworkConnectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkConnectionCollectionResponse(networkConnectionCollectionResponse: NetworkConnectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(networkConnectionCollectionResponse),
        "value": n => { networkConnectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNetworkConnection) as any ; },
    }
}
