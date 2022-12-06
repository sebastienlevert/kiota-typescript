import {LicenseDetailsRequestBuilderGetQueryParameters} from './licenseDetailsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LicenseDetailsRequestBuilderGetQueryParameters;
}
