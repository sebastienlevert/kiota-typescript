import {ExtensionPropertiesRequestBuilderGetQueryParameters} from './extensionPropertiesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertiesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExtensionPropertiesRequestBuilderGetQueryParameters;
}
