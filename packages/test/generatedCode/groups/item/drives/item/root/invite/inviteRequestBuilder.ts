import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {deserializeIntoInviteResponse} from './deserializeIntoInviteResponse';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {InviteRequestBuilderPostRequestConfiguration} from './inviteRequestBuilderPostRequestConfiguration';
import {InviteResponse} from './inviteResponse';
import {serializeInviteResponse} from './serializeInviteResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method. */
export class InviteRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new InviteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/drives/{drive%2Did}/root/microsoft.graph.invite";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Sends a sharing invitation for a **driveItem**.A sharing invitation provides permissions to the recipients and optionally sends them an email with a [sharing link][].
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: InvitePostRequestBody | undefined, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeInvitePostRequestBody);
        return requestInfo;
    };
    /**
     * Sends a sharing invitation for a **driveItem**.A sharing invitation provides permissions to the recipients and optionally sends them an email with a [sharing link][].
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InviteResponse
     */
    public post(body: InvitePostRequestBody | undefined, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<InviteResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<InviteResponse>(requestInfo,deserializeIntoInviteResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
