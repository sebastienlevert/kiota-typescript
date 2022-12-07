import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {StringKeyAttributeMappingSourceValuePair} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingSource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The expression property */
    expression?: string;
    /** The name property */
    name?: string;
    /** The parameters property */
    parameters?: StringKeyAttributeMappingSourceValuePair[];
    /** The type property */
    type?: AttributeMappingSourceType;
}
