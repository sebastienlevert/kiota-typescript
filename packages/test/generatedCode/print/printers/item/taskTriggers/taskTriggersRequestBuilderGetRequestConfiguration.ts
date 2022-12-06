import {TaskTriggersRequestBuilderGetQueryParameters} from './taskTriggersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaskTriggersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TaskTriggersRequestBuilderGetQueryParameters;
}
