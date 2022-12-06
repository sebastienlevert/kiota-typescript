import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SortProperty extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** True if the sort order is descending. Default is false, with the sort order as ascending. Optional. */
    isDescending?: boolean;
    /** The name of the property to sort on. Required. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
}
