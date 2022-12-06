import {DeploymentSummaryRequestBuilderGetQueryParameters} from './deploymentSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeploymentSummaryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeploymentSummaryRequestBuilderGetQueryParameters;
}
