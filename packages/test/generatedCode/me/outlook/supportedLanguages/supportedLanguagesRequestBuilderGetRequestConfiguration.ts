import {SupportedLanguagesRequestBuilderGetQueryParameters} from './supportedLanguagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SupportedLanguagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SupportedLanguagesRequestBuilderGetQueryParameters;
}
