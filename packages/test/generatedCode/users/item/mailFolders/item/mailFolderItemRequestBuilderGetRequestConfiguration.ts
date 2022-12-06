import {MailFolderItemRequestBuilderGetQueryParameters} from './mailFolderItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MailFolderItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MailFolderItemRequestBuilderGetQueryParameters;
}
