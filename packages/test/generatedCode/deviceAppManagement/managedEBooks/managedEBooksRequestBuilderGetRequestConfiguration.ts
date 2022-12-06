import {ManagedEBooksRequestBuilderGetQueryParameters} from './managedEBooksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedEBooksRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedEBooksRequestBuilderGetQueryParameters;
}
