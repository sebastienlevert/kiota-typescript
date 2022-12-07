
export interface TransitiveReportsRequestBuilderGetQueryParameters {
    /** Include count of items */
    count?: boolean;
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
    /** Skip the first n items */
    skip?: number;
    /** Show only the first n items */
    top?: number;
}
