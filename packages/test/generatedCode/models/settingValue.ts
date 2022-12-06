import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingValue extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the setting (as defined by the groupSettingTemplate). */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** Value of the setting. */
    value?: string;
}
