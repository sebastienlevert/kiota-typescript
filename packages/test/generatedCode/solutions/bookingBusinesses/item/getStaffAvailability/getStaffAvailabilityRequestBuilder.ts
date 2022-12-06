import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {deserializeIntoGetStaffAvailabilityResponse} from './deserializeIntoGetStaffAvailabilityResponse';
import {GetStaffAvailabilityPostRequestBody} from './getStaffAvailabilityPostRequestBody';
import {GetStaffAvailabilityRequestBuilderPostRequestConfiguration} from './getStaffAvailabilityRequestBuilderPostRequestConfiguration';
import {GetStaffAvailabilityResponse} from './getStaffAvailabilityResponse';
import {serializeGetStaffAvailabilityResponse} from './serializeGetStaffAvailabilityResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getStaffAvailability method. */
export class GetStaffAvailabilityRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetStaffAvailabilityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/microsoft.graph.getStaffAvailability";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: GetStaffAvailabilityPostRequestBody | undefined, requestConfiguration?: GetStaffAvailabilityRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetStaffAvailabilityPostRequestBody);
        return requestInfo;
    };
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetStaffAvailabilityResponse
     */
    public post(body: GetStaffAvailabilityPostRequestBody | undefined, requestConfiguration?: GetStaffAvailabilityRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetStaffAvailabilityResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetStaffAvailabilityResponse>(requestInfo,deserializeIntoGetStaffAvailabilityResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
