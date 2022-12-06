import {OpenShiftsRequestBuilderGetQueryParameters} from './openShiftsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OpenShiftsRequestBuilderGetQueryParameters;
}
