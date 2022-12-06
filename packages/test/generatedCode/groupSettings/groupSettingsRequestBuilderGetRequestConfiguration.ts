import {GroupSettingsRequestBuilderGetQueryParameters} from './groupSettingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GroupSettingsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: GroupSettingsRequestBuilderGetQueryParameters;
}
