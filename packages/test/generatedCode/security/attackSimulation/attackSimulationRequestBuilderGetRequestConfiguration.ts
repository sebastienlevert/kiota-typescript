import {AttackSimulationRequestBuilderGetQueryParameters} from './attackSimulationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttackSimulationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttackSimulationRequestBuilderGetQueryParameters;
}
