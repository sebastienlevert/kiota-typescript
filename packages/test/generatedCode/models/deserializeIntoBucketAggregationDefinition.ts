import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {deserializeIntoBucketAggregationRange} from './deserializeIntoBucketAggregationRange';
import {BucketAggregationDefinition} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationDefinition(bucketAggregationDefinition: BucketAggregationDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isDescending": n => { bucketAggregationDefinition.isDescending = n.getBooleanValue() as any ; },
        "minimumCount": n => { bucketAggregationDefinition.minimumCount = n.getNumberValue() as any ; },
        "@odata.type": n => { bucketAggregationDefinition.odataType = n.getStringValue() as any ; },
        "prefixFilter": n => { bucketAggregationDefinition.prefixFilter = n.getStringValue() as any ; },
        "ranges": n => { bucketAggregationDefinition.ranges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBucketAggregationRange) as any ; },
        "sortBy": n => { bucketAggregationDefinition.sortBy = n.getEnumValue<BucketAggregationSortProperty>(BucketAggregationSortProperty) as any ; },
    }
}
