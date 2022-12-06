import {ConnectorsRequestBuilderGetQueryParameters} from './connectorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectorsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConnectorsRequestBuilderGetQueryParameters;
}
