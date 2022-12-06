import {deserializeIntoNotebook} from '../../../../models/deserializeIntoNotebook';
import {deserializeIntoNotebookCollectionResponse} from '../../../../models/deserializeIntoNotebookCollectionResponse';
import {Notebook} from '../../../../models/notebook';
import {NotebookCollectionResponse} from '../../../../models/notebookCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeNotebook} from '../../../../models/serializeNotebook';
import {serializeNotebookCollectionResponse} from '../../../../models/serializeNotebookCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetNotebookFromWebUrlRequestBuilder} from './getNotebookFromWebUrl/getNotebookFromWebUrlRequestBuilder';
import {GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder} from './getRecentNotebooksWithIncludePersonalNotebooks/getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder';
import {NotebooksRequestBuilderGetRequestConfiguration} from './notebooksRequestBuilderGetRequestConfiguration';
import {NotebooksRequestBuilderPostRequestConfiguration} from './notebooksRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the notebooks property of the microsoft.graph.onenote entity. */
export class NotebooksRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getNotebookFromWebUrl method. */
    public get getNotebookFromWebUrl(): GetNotebookFromWebUrlRequestBuilder {
        return new GetNotebookFromWebUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new NotebooksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/onenote/notebooks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of notebook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new OneNote notebook.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: Notebook | undefined, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeNotebook);
        return requestInfo;
    };
    /**
     * Retrieve a list of notebook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NotebookCollectionResponse
     */
    public get(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NotebookCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<NotebookCollectionResponse>(requestInfo,deserializeIntoNotebookCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getRecentNotebooks method.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @returns a getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder
     */
    public getRecentNotebooksWithIncludePersonalNotebooks(includePersonalNotebooks: boolean | undefined) : GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
        if(!includePersonalNotebooks) throw new Error("includePersonalNotebooks cannot be undefined");
        return new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder(this.pathParameters, this.requestAdapter, includePersonalNotebooks);
    };
    /**
     * Create a new OneNote notebook.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Notebook
     */
    public post(body: Notebook | undefined, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Notebook | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Notebook>(requestInfo,deserializeIntoNotebook, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
