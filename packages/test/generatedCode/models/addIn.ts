import {KeyValue} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddIn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The id property */
    id?: string;
    /** The properties property */
    properties?: KeyValue[];
    /** The type property */
    type?: string;
}
