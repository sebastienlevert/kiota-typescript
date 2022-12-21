import {MailFoldersRequestBuilderGetQueryParameters} from './mailFoldersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MailFoldersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MailFoldersRequestBuilderGetQueryParameters;
}
