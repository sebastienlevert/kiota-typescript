import {AggregationOption} from './index';
import {serializeBucketAggregationDefinition} from './serializeBucketAggregationDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAggregationOption(writer: SerializationWriter, aggregationOption: AggregationOption | undefined = {}) : void {
            writer.writeObjectValueFromMethod("bucketDefinition", aggregationOption.bucketDefinition as any, serializeBucketAggregationDefinition);
            writer.writeStringValue("field", aggregationOption.field);
            writer.writeStringValue("@odata.type", aggregationOption.odataType);
            writer.writeNumberValue("size", aggregationOption.size);
}
