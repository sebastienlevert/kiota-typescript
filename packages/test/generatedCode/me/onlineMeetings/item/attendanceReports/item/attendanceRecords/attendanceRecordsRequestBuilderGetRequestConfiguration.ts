import {AttendanceRecordsRequestBuilderGetQueryParameters} from './attendanceRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttendanceRecordsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttendanceRecordsRequestBuilderGetQueryParameters;
}
