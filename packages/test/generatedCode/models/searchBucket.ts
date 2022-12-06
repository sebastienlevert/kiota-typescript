import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchBucket extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A token containing the encoded filter to aggregate search matches by the specific key value. To use the filter, pass the token as part of the aggregationFilter property in a searchRequest object, in the format '{field}:/'{aggregationFilterToken}/''. See an example. */
    aggregationFilterToken?: string;
    /** The approximate number of search matches that share the same value specified in the key property. Note that this number is not the exact number of matches. */
    count?: number;
    /** The discrete value of the field that an aggregation was computed on. */
    key?: string;
    /** The OdataType property */
    odataType?: string;
}
