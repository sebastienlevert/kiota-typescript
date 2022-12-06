import {ExchangeConnectorsRequestBuilderGetQueryParameters} from './exchangeConnectorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExchangeConnectorsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExchangeConnectorsRequestBuilderGetQueryParameters;
}
