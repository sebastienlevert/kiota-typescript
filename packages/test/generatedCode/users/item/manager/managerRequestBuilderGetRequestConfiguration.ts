import {ManagerRequestBuilderGetQueryParameters} from './managerRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagerRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagerRequestBuilderGetQueryParameters;
}