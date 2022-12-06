
export interface EventItemRequestBuilderGetQueryParameters {
    /** The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00 */
    endDateTime?: string;
    /** Select properties to be returned */
    select?: string[];
    /** The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00 */
    startDateTime?: string;
}
