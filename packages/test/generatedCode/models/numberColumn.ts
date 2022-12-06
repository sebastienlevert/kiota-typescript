import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NumberColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** How many decimal places to display. See below for information about the possible values. */
    decimalPlaces?: string;
    /** How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number. */
    displayAs?: string;
    /** The maximum permitted value. */
    maximum?: number;
    /** The minimum permitted value. */
    minimum?: number;
    /** The OdataType property */
    odataType?: string;
}
