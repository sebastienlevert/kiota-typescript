import {SchemaExtensionsRequestBuilderGetQueryParameters} from './schemaExtensionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SchemaExtensionsRequestBuilderGetQueryParameters;
}
