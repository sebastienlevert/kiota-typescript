import {DriveItemItemRequestBuilderGetQueryParameters} from './driveItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DriveItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DriveItemItemRequestBuilderGetQueryParameters;
}
