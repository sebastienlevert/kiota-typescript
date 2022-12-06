import {AssignmentRequestBuilderGetQueryParameters} from './assignmentRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AssignmentRequestBuilderGetQueryParameters;
}
