import {CertificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters} from './certificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CertificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters;
}
