import {OwnedObjectsRequestBuilderGetQueryParameters} from './ownedObjectsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OwnedObjectsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OwnedObjectsRequestBuilderGetQueryParameters;
}
