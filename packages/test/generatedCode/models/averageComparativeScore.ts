import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AverageComparativeScore extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Average score within specified basis. */
    averageScore?: number;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes. */
    basis?: string;
    /** The OdataType property */
    odataType?: string;
}
