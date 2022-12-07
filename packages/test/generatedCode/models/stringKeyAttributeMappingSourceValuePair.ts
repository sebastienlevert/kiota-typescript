import {AttributeMappingSource} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StringKeyAttributeMappingSourceValuePair extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the parameter. */
    key?: string;
    /** The value property */
    value?: AttributeMappingSource;
}
