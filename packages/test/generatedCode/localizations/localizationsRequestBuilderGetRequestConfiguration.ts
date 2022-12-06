import {LocalizationsRequestBuilderGetQueryParameters} from './localizationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LocalizationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LocalizationsRequestBuilderGetQueryParameters;
}
