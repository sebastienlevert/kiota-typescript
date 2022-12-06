import {FilesFolderRequestBuilderGetQueryParameters} from './filesFolderRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FilesFolderRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: FilesFolderRequestBuilderGetQueryParameters;
}
