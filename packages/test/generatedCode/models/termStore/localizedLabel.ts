import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedLabel extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether the label is the default label. */
    isDefault?: boolean;
    /** The language tag for the label. */
    languageTag?: string;
    /** The name of the label. */
    name?: string;
}
