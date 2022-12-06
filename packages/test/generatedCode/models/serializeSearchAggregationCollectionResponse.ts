import {SearchAggregationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSearchAggregation} from './serializeSearchAggregation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAggregationCollectionResponse(writer: SerializationWriter, searchAggregationCollectionResponse: SearchAggregationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchAggregationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", searchAggregationCollectionResponse.value as any, serializeSearchAggregation);
}
