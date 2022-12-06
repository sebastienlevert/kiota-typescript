import {MobileLobAppRequestBuilderGetQueryParameters} from './mobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileLobAppRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MobileLobAppRequestBuilderGetQueryParameters;
}
