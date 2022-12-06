import {ServiceConfigurationRecordsRequestBuilderGetQueryParameters} from './serviceConfigurationRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceConfigurationRecordsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServiceConfigurationRecordsRequestBuilderGetQueryParameters;
}
