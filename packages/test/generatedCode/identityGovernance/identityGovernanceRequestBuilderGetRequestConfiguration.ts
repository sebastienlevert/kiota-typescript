import {IdentityGovernanceRequestBuilderGetQueryParameters} from './identityGovernanceRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityGovernanceRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityGovernanceRequestBuilderGetQueryParameters;
}
