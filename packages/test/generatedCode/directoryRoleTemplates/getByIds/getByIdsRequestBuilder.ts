import {ODataError} from '../../models/oDataErrors/oDataError';
import {deserializeIntoGetByIdsResponse} from './deserializeIntoGetByIdsResponse';
import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {GetByIdsRequestBuilderPostRequestConfiguration} from './getByIdsRequestBuilderPostRequestConfiguration';
import {GetByIdsResponse} from './getByIdsResponse';
import {serializeGetByIdsResponse} from './serializeGetByIdsResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method. */
export class GetByIdsRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetByIdsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/directoryRoleTemplates/microsoft.graph.getByIds";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: GetByIdsPostRequestBody | undefined, requestConfiguration?: GetByIdsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetByIdsPostRequestBody);
        return requestInfo;
    };
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetByIdsResponse
     */
    public post(body: GetByIdsPostRequestBody | undefined, requestConfiguration?: GetByIdsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetByIdsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetByIdsResponse>(requestInfo,deserializeIntoGetByIdsResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
