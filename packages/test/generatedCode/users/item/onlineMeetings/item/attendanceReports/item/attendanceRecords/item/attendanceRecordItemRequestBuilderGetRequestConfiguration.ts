import {AttendanceRecordItemRequestBuilderGetQueryParameters} from './attendanceRecordItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttendanceRecordItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttendanceRecordItemRequestBuilderGetQueryParameters;
}
