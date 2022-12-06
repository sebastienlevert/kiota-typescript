import {CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters} from './certificateBasedAuthConfigurationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters;
}
