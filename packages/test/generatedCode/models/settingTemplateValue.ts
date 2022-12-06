import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingTemplateValue extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Default value for the setting. */
    defaultValue?: string;
    /** Description of the setting. */
    description?: string;
    /** Name of the setting. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** Type of the setting. */
    type?: string;
}
