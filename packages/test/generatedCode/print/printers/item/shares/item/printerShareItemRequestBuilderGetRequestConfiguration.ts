import {PrinterShareItemRequestBuilderGetQueryParameters} from './printerShareItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrinterShareItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PrinterShareItemRequestBuilderGetQueryParameters;
}
