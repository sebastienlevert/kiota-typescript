import {AdministrativeUnitItemRequestBuilderGetQueryParameters} from './administrativeUnitItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AdministrativeUnitItemRequestBuilderGetQueryParameters;
}
