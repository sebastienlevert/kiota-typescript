import {AdministrativeUnitRequestBuilderGetQueryParameters} from './administrativeUnitRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AdministrativeUnitRequestBuilderGetQueryParameters;
}
