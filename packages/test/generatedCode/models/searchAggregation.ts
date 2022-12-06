import {SearchBucket} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAggregation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The buckets property */
    buckets?: SearchBucket[];
    /** The field property */
    field?: string;
    /** The OdataType property */
    odataType?: string;
}
