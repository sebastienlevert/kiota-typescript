import {SchemaExtensionItemRequestBuilderGetQueryParameters} from './schemaExtensionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SchemaExtensionItemRequestBuilderGetQueryParameters;
}
