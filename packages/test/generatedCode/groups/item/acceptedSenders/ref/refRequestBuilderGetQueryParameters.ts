
export interface RefRequestBuilderGetQueryParameters {
    /** Include count of items */
    count?: boolean;
    /** Filter items by property values */
    filter?: string;
    /** Order items by property values */
    orderby?: string[];
    /** Skip the first n items */
    skip?: number;
    /** Show only the first n items */
    top?: number;
}
