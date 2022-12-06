import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {deserializeIntoUnfavoriteResponse} from './deserializeIntoUnfavoriteResponse';
import {serializeUnfavoriteResponse} from './serializeUnfavoriteResponse';
import {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {UnfavoriteRequestBuilderPostRequestConfiguration} from './unfavoriteRequestBuilderPostRequestConfiguration';
import {UnfavoriteResponse} from './unfavoriteResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the unfavorite method. */
export class UnfavoriteRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UnfavoriteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/admin/serviceAnnouncement/messages/microsoft.graph.unfavorite";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UnfavoritePostRequestBody | undefined, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnfavoritePostRequestBody);
        return requestInfo;
    };
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnfavoriteResponse
     */
    public post(body: UnfavoritePostRequestBody | undefined, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnfavoriteResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnfavoriteResponse>(requestInfo,deserializeIntoUnfavoriteResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
