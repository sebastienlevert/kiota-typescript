import {RecoveryKeysRequestBuilderGetQueryParameters} from './recoveryKeysRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RecoveryKeysRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RecoveryKeysRequestBuilderGetQueryParameters;
}
