import {AgreementItemRequestBuilderGetQueryParameters} from './agreementItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AgreementItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AgreementItemRequestBuilderGetQueryParameters;
}
