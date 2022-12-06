import {DefinitionsRequestBuilderGetQueryParameters} from './definitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DefinitionsRequestBuilderGetQueryParameters;
}
