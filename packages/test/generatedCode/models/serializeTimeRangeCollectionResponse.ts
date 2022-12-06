import {TimeRangeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeRange} from './serializeTimeRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeRangeCollectionResponse(writer: SerializationWriter, timeRangeCollectionResponse: TimeRangeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeRangeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", timeRangeCollectionResponse.value as any, serializeTimeRange);
}
