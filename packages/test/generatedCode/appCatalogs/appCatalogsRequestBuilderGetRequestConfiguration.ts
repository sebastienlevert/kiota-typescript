import {AppCatalogsRequestBuilderGetQueryParameters} from './appCatalogsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppCatalogsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AppCatalogsRequestBuilderGetQueryParameters;
}
