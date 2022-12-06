import {WorkbooksRequestBuilderGetQueryParameters} from './workbooksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbooksRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: WorkbooksRequestBuilderGetQueryParameters;
}
