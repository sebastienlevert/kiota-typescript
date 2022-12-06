import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {LocationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationCollectionResponse(locationCollectionResponse: LocationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(locationCollectionResponse),
        "value": n => { locationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocation) as any ; },
    }
}
