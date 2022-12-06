import {ManagedMobileLobAppRequestBuilderGetQueryParameters} from './managedMobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobAppRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedMobileLobAppRequestBuilderGetQueryParameters;
}
