import {IdentityProtectionRequestBuilderGetQueryParameters} from './identityProtectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProtectionRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityProtectionRequestBuilderGetQueryParameters;
}
