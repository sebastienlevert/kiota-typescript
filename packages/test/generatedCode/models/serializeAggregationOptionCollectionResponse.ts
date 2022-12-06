import {AggregationOptionCollectionResponse} from './index';
import {serializeAggregationOption} from './serializeAggregationOption';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAggregationOptionCollectionResponse(writer: SerializationWriter, aggregationOptionCollectionResponse: AggregationOptionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, aggregationOptionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", aggregationOptionCollectionResponse.value as any, serializeAggregationOption);
}
