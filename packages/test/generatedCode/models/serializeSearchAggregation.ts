import {SearchAggregation} from './index';
import {serializeSearchBucket} from './serializeSearchBucket';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAggregation(writer: SerializationWriter, searchAggregation: SearchAggregation | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("buckets", searchAggregation.buckets as any, serializeSearchBucket);
            writer.writeStringValue("field", searchAggregation.field);
            writer.writeStringValue("@odata.type", searchAggregation.odataType);
}
