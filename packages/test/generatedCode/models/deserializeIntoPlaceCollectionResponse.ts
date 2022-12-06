import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPlace} from './deserializeIntoPlace';
import {PlaceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlaceCollectionResponse(placeCollectionResponse: PlaceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(placeCollectionResponse),
        "value": n => { placeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlace) as any ; },
    }
}
