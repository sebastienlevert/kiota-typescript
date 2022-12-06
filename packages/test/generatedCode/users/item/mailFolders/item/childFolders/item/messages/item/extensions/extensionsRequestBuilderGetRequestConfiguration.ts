import {ExtensionsRequestBuilderGetQueryParameters} from './extensionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExtensionsRequestBuilderGetQueryParameters;
}
