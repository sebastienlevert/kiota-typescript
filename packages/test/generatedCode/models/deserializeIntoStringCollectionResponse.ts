import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {StringCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringCollectionResponse(stringCollectionResponse: StringCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(stringCollectionResponse),
        "value": n => { stringCollectionResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
