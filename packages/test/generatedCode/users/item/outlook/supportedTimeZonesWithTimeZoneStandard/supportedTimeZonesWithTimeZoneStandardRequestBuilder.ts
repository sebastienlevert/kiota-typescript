import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse} from './deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse';
import {serializeSupportedTimeZonesWithTimeZoneStandardResponse} from './serializeSupportedTimeZonesWithTimeZoneStandardResponse';
import {SupportedTimeZonesWithTimeZoneStandardRequestBuilderGetRequestConfiguration} from './supportedTimeZonesWithTimeZoneStandardRequestBuilderGetRequestConfiguration';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './supportedTimeZonesWithTimeZoneStandardResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedTimeZones method. */
export class SupportedTimeZonesWithTimeZoneStandardRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SupportedTimeZonesWithTimeZoneStandardRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param TimeZoneStandard Usage: TimeZoneStandard='{TimeZoneStandard}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, timeZoneStandard?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{TimeZoneStandard}'){?%24top,%24skip,%24search,%24filter,%24count}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["TimeZoneStandard"] = timeZoneStandard
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function supportedTimeZones
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SupportedTimeZonesWithTimeZoneStandardRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Invoke function supportedTimeZones
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SupportedTimeZonesWithTimeZoneStandardResponse
     */
    public get(requestConfiguration?: SupportedTimeZonesWithTimeZoneStandardRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SupportedTimeZonesWithTimeZoneStandardResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SupportedTimeZonesWithTimeZoneStandardResponse>(requestInfo,deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
