import {ServiceAnnouncementRequestBuilderGetQueryParameters} from './serviceAnnouncementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServiceAnnouncementRequestBuilderGetQueryParameters;
}
