import {RiskDetectionsRequestBuilderGetQueryParameters} from './riskDetectionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskDetectionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RiskDetectionsRequestBuilderGetQueryParameters;
}
