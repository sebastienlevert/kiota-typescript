import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Phone extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The phone number. */
    number?: string;
    /** The type property */
    type?: PhoneType;
}
