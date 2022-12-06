import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {ArchivePostRequestBody} from './archivePostRequestBody';
import {ArchiveRequestBuilderPostRequestConfiguration} from './archiveRequestBuilderPostRequestConfiguration';
import {ArchiveResponse} from './archiveResponse';
import {deserializeIntoArchiveResponse} from './deserializeIntoArchiveResponse';
import {serializeArchiveResponse} from './serializeArchiveResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the archive method. */
export class ArchiveRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ArchiveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/admin/serviceAnnouncement/messages/microsoft.graph.archive";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Archive a list of serviceUpdateMessages for the signed in user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ArchivePostRequestBody | undefined, requestConfiguration?: ArchiveRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeArchivePostRequestBody);
        return requestInfo;
    };
    /**
     * Archive a list of serviceUpdateMessages for the signed in user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArchiveResponse
     */
    public post(body: ArchivePostRequestBody | undefined, requestConfiguration?: ArchiveRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArchiveResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ArchiveResponse>(requestInfo,deserializeIntoArchiveResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
