import {UserStateSummaryRequestBuilderGetQueryParameters} from './userStateSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserStateSummaryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserStateSummaryRequestBuilderGetQueryParameters;
}
