
export interface CalendarViewRequestBuilderGetQueryParameters {
    /** Include count of items */
    count?: boolean;
    /** The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00 */
    endDateTime?: string;
    /** Filter items by property values */
    filter?: string;
    /** Order items by property values */
    orderby?: string[];
    /** Select properties to be returned */
    select?: string[];
    /** Skip the first n items */
    skip?: number;
    /** The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00 */
    startDateTime?: string;
    /** Show only the first n items */
    top?: number;
}
