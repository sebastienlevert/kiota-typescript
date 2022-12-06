import {TermsAndConditionsRequestBuilderGetQueryParameters} from './termsAndConditionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TermsAndConditionsRequestBuilderGetQueryParameters;
}
