import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {deserializeIntoFilterByCurrentUserWithOnResponse} from './deserializeIntoFilterByCurrentUserWithOnResponse';
import {FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration} from './filterByCurrentUserWithOnRequestBuilderGetRequestConfiguration';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {serializeFilterByCurrentUserWithOnResponse} from './serializeFilterByCurrentUserWithOnResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the filterByCurrentUser method. */
export class FilterByCurrentUserWithOnRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new FilterByCurrentUserWithOnRequestBuilder and sets the default values.
     * @param on Usage: on='{on}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, on?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/microsoft.graph.filterByCurrentUser(on='{on}'){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["on"] = on
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function filterByCurrentUser
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Invoke function filterByCurrentUser
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FilterByCurrentUserWithOnResponse
     */
    public get(requestConfiguration?: FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FilterByCurrentUserWithOnResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<FilterByCurrentUserWithOnResponse>(requestInfo,deserializeIntoFilterByCurrentUserWithOnResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
