import {ManagedEBookItemRequestBuilderGetQueryParameters} from './managedEBookItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedEBookItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedEBookItemRequestBuilderGetQueryParameters;
}
