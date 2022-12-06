import {BucketAggregationDefinition} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AggregationOption extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The bucketDefinition property */
    bucketDefinition?: BucketAggregationDefinition;
    /** Computes aggregation on the field while the field exists in current entity type. Required. */
    field?: string;
    /** The OdataType property */
    odataType?: string;
    /** The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional. */
    size?: number;
}
