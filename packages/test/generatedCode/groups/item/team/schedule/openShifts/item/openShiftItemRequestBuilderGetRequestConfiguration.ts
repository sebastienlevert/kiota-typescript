import {OpenShiftItemRequestBuilderGetQueryParameters} from './openShiftItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OpenShiftItemRequestBuilderGetQueryParameters;
}
