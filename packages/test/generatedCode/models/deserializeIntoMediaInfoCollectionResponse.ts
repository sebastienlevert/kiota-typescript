import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMediaInfo} from './deserializeIntoMediaInfo';
import {MediaInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaInfoCollectionResponse(mediaInfoCollectionResponse: MediaInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mediaInfoCollectionResponse),
        "value": n => { mediaInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMediaInfo) as any ; },
    }
}
