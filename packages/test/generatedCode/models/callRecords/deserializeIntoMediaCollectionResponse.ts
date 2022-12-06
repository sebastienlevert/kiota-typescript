import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMedia} from './deserializeIntoMedia';
import {MediaCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaCollectionResponse(mediaCollectionResponse: MediaCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mediaCollectionResponse),
        "value": n => { mediaCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMedia) as any ; },
    }
}
