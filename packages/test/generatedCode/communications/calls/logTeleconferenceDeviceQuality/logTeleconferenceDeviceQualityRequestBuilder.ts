import {ODataError} from '../../../models/oDataErrors/oDataError';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './logTeleconferenceDeviceQualityPostRequestBody';
import {LogTeleconferenceDeviceQualityRequestBuilderPostRequestConfiguration} from './logTeleconferenceDeviceQualityRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the logTeleconferenceDeviceQuality method. */
export class LogTeleconferenceDeviceQualityRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new LogTeleconferenceDeviceQualityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/calls/microsoft.graph.logTeleconferenceDeviceQuality";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: LogTeleconferenceDeviceQualityPostRequestBody | undefined, requestConfiguration?: LogTeleconferenceDeviceQualityRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeLogTeleconferenceDeviceQualityPostRequestBody);
        return requestInfo;
    };
    /**
     * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public post(body: LogTeleconferenceDeviceQualityPostRequestBody | undefined, requestConfiguration?: LogTeleconferenceDeviceQualityRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
