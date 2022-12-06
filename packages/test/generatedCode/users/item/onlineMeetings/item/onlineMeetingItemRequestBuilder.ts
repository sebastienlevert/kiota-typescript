import {deserializeIntoOnlineMeeting} from '../../../../models/deserializeIntoOnlineMeeting';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {OnlineMeeting} from '../../../../models/onlineMeeting';
import {serializeOnlineMeeting} from '../../../../models/serializeOnlineMeeting';
import {AttendanceReportsRequestBuilder} from './attendanceReports/attendanceReportsRequestBuilder';
import {MeetingAttendanceReportItemRequestBuilder} from './attendanceReports/item/meetingAttendanceReportItemRequestBuilder';
import {AttendeeReportRequestBuilder} from './attendeeReport/attendeeReportRequestBuilder';
import {OnlineMeetingItemRequestBuilderDeleteRequestConfiguration} from './onlineMeetingItemRequestBuilderDeleteRequestConfiguration';
import {OnlineMeetingItemRequestBuilderGetRequestConfiguration} from './onlineMeetingItemRequestBuilderGetRequestConfiguration';
import {OnlineMeetingItemRequestBuilderPatchRequestConfiguration} from './onlineMeetingItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the onlineMeetings property of the microsoft.graph.user entity. */
export class OnlineMeetingItemRequestBuilder {
    /** Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity. */
    public get attendanceReports(): AttendanceReportsRequestBuilder {
        return new AttendanceReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the media for the user entity. */
    public get attendeeReport(): AttendeeReportRequestBuilder {
        return new AttendeeReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeeting entity.
     * @param id Unique identifier of the item
     * @returns a MeetingAttendanceReportItemRequestBuilder
     */
    public attendanceReportsById(id: string) : MeetingAttendanceReportItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["meetingAttendanceReport%2Did"] = id
        return new MeetingAttendanceReportItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OnlineMeetingItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/onlineMeetings/{onlineMeeting%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property onlineMeetings for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: OnlineMeetingItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get onlineMeetings from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OnlineMeetingItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property onlineMeetings in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OnlineMeeting | undefined, requestConfiguration?: OnlineMeetingItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOnlineMeeting);
        return requestInfo;
    };
    /**
     * Delete navigation property onlineMeetings for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: OnlineMeetingItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get onlineMeetings from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnlineMeeting
     */
    public get(requestConfiguration?: OnlineMeetingItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnlineMeeting | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnlineMeeting>(requestInfo,deserializeIntoOnlineMeeting, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property onlineMeetings in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnlineMeeting
     */
    public patch(body: OnlineMeeting | undefined, requestConfiguration?: OnlineMeetingItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnlineMeeting | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnlineMeeting>(requestInfo,deserializeIntoOnlineMeeting, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
