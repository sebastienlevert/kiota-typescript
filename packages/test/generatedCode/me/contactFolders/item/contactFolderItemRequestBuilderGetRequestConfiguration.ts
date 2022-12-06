import {ContactFolderItemRequestBuilderGetQueryParameters} from './contactFolderItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContactFolderItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ContactFolderItemRequestBuilderGetQueryParameters;
}
