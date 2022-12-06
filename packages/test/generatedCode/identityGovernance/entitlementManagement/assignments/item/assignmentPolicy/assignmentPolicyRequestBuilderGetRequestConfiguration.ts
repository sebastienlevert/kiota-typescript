import {AssignmentPolicyRequestBuilderGetQueryParameters} from './assignmentPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AssignmentPolicyRequestBuilderGetQueryParameters;
}
