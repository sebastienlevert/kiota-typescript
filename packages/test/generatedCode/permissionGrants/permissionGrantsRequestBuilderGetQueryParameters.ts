
export interface PermissionGrantsRequestBuilderGetQueryParameters {
    /** Expand related entities */
    expand?: string[];
    /** Filter items by property values */
    filter?: string;
    /** Order items by property values */
    orderby?: string[];
    /** Search items by search phrases */
    search?: string;
    /** Select properties to be returned */
    select?: string[];
}
