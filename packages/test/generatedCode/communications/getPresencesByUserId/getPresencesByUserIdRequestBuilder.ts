import {ODataError} from '../../models/oDataErrors/oDataError';
import {deserializeIntoGetPresencesByUserIdResponse} from './deserializeIntoGetPresencesByUserIdResponse';
import {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import {GetPresencesByUserIdRequestBuilderPostRequestConfiguration} from './getPresencesByUserIdRequestBuilderPostRequestConfiguration';
import {GetPresencesByUserIdResponse} from './getPresencesByUserIdResponse';
import {serializeGetPresencesByUserIdResponse} from './serializeGetPresencesByUserIdResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPresencesByUserId method. */
export class GetPresencesByUserIdRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetPresencesByUserIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/microsoft.graph.getPresencesByUserId";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the presence information for multiple users.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: GetPresencesByUserIdPostRequestBody | undefined, requestConfiguration?: GetPresencesByUserIdRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetPresencesByUserIdPostRequestBody);
        return requestInfo;
    };
    /**
     * Get the presence information for multiple users.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetPresencesByUserIdResponse
     */
    public post(body: GetPresencesByUserIdPostRequestBody | undefined, requestConfiguration?: GetPresencesByUserIdRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetPresencesByUserIdResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetPresencesByUserIdResponse>(requestInfo,deserializeIntoGetPresencesByUserIdResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
