import {OwnedDevicesRequestBuilderGetQueryParameters} from './ownedDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OwnedDevicesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OwnedDevicesRequestBuilderGetQueryParameters;
}
