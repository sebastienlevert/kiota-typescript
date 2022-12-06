import {PrintConnectorItemRequestBuilderGetQueryParameters} from './printConnectorItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintConnectorItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PrintConnectorItemRequestBuilderGetQueryParameters;
}
