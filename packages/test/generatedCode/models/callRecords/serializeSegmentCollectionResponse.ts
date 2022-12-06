import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {SegmentCollectionResponse} from './index';
import {serializeSegment} from './serializeSegment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSegmentCollectionResponse(writer: SerializationWriter, segmentCollectionResponse: SegmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, segmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", segmentCollectionResponse.value as any, serializeSegment);
}
