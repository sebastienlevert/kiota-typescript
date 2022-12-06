import {ContactFoldersRequestBuilderGetQueryParameters} from './contactFoldersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContactFoldersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ContactFoldersRequestBuilderGetQueryParameters;
}
