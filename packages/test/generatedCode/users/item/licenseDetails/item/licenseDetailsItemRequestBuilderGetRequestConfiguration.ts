import {LicenseDetailsItemRequestBuilderGetQueryParameters} from './licenseDetailsItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LicenseDetailsItemRequestBuilderGetQueryParameters;
}
