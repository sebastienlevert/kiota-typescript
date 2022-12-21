import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MailFoldersRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
}
