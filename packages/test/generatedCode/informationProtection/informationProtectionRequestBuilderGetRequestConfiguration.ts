import {InformationProtectionRequestBuilderGetQueryParameters} from './informationProtectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InformationProtectionRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: InformationProtectionRequestBuilderGetQueryParameters;
}
