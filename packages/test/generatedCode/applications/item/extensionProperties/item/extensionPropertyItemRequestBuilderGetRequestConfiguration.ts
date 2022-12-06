import {ExtensionPropertyItemRequestBuilderGetQueryParameters} from './extensionPropertyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExtensionPropertyItemRequestBuilderGetQueryParameters;
}
