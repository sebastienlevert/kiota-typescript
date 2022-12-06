import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSegment} from './deserializeIntoSegment';
import {SegmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSegmentCollectionResponse(segmentCollectionResponse: SegmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(segmentCollectionResponse),
        "value": n => { segmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSegment) as any ; },
    }
}
