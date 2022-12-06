import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {deserializeIntoGetApplicableContentTypesForListWithListIdResponse} from './deserializeIntoGetApplicableContentTypesForListWithListIdResponse';
import {GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration} from './getApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration';
import {GetApplicableContentTypesForListWithListIdResponse} from './getApplicableContentTypesForListWithListIdResponse';
import {serializeGetApplicableContentTypesForListWithListIdResponse} from './serializeGetApplicableContentTypesForListWithListIdResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getApplicableContentTypesForList method. */
export class GetApplicableContentTypesForListWithListIdRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetApplicableContentTypesForListWithListIdRequestBuilder and sets the default values.
     * @param listId Usage: listId='{listId}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, listId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/microsoft.graph.getApplicableContentTypesForList(listId='{listId}'){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["listId"] = listId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getApplicableContentTypesForList
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Invoke function getApplicableContentTypesForList
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetApplicableContentTypesForListWithListIdResponse
     */
    public get(requestConfiguration?: GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetApplicableContentTypesForListWithListIdResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetApplicableContentTypesForListWithListIdResponse>(requestInfo,deserializeIntoGetApplicableContentTypesForListWithListIdResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
