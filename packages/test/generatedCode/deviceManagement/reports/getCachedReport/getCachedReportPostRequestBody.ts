import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetCachedReportPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The groupBy property */
    groupBy?: string[];
    /** The id property */
    id?: string;
    /** The orderBy property */
    orderBy?: string[];
    /** The search property */
    search?: string;
    /** The select property */
    select?: string[];
    /** The skip property */
    skip?: number;
    /** The top property */
    top?: number;
}
