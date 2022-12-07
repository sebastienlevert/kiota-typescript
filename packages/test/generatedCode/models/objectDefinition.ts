import {AttributeDefinition, MetadataEntry} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectDefinition extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attributes property */
    attributes?: AttributeDefinition[];
    /** The metadata property */
    metadata?: MetadataEntry[];
    /** The name property */
    name?: string;
    /** The supportedApis property */
    supportedApis?: string[];
}
