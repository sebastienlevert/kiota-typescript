import {ColumnDefinition} from '../../../../../../models/columnDefinition';
import {ColumnDefinitionCollectionResponse} from '../../../../../../models/columnDefinitionCollectionResponse';
import {deserializeIntoColumnDefinition} from '../../../../../../models/deserializeIntoColumnDefinition';
import {deserializeIntoColumnDefinitionCollectionResponse} from '../../../../../../models/deserializeIntoColumnDefinitionCollectionResponse';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeColumnDefinition} from '../../../../../../models/serializeColumnDefinition';
import {serializeColumnDefinitionCollectionResponse} from '../../../../../../models/serializeColumnDefinitionCollectionResponse';
import {ColumnsRequestBuilderGetRequestConfiguration} from './columnsRequestBuilderGetRequestConfiguration';
import {ColumnsRequestBuilderPostRequestConfiguration} from './columnsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the columns property of the microsoft.graph.list entity. */
export class ColumnsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ColumnsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/drives/{drive%2Did}/list/columns{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the collection of columns represented as [columnDefinition][columnDefinition] resources in a [list][list].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ColumnsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ColumnDefinition | undefined, requestConfiguration?: ColumnsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeColumnDefinition);
        return requestInfo;
    };
    /**
     * Get the collection of columns represented as [columnDefinition][columnDefinition] resources in a [list][list].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ColumnDefinitionCollectionResponse
     */
    public get(requestConfiguration?: ColumnsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ColumnDefinitionCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ColumnDefinitionCollectionResponse>(requestInfo,deserializeIntoColumnDefinitionCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ColumnDefinition
     */
    public post(body: ColumnDefinition | undefined, requestConfiguration?: ColumnsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ColumnDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ColumnDefinition>(requestInfo,deserializeIntoColumnDefinition, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
