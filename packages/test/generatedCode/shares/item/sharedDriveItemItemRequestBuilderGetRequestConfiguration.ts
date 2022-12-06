import {SharedDriveItemItemRequestBuilderGetQueryParameters} from './sharedDriveItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedDriveItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SharedDriveItemItemRequestBuilderGetQueryParameters;
}
