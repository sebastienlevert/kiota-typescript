import {deserializeIntoDocumentSetVersion} from '../../../../../../models/deserializeIntoDocumentSetVersion';
import {deserializeIntoDocumentSetVersionCollectionResponse} from '../../../../../../models/deserializeIntoDocumentSetVersionCollectionResponse';
import {DocumentSetVersion} from '../../../../../../models/documentSetVersion';
import {DocumentSetVersionCollectionResponse} from '../../../../../../models/documentSetVersionCollectionResponse';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeDocumentSetVersion} from '../../../../../../models/serializeDocumentSetVersion';
import {serializeDocumentSetVersionCollectionResponse} from '../../../../../../models/serializeDocumentSetVersionCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DocumentSetVersionsRequestBuilderGetRequestConfiguration} from './documentSetVersionsRequestBuilderGetRequestConfiguration';
import {DocumentSetVersionsRequestBuilderPostRequestConfiguration} from './documentSetVersionsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the documentSetVersions property of the microsoft.graph.listItem entity. */
export class DocumentSetVersionsRequestBuilder {
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
     * Instantiates a new DocumentSetVersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/list/items/{listItem%2Did}/documentSetVersions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of the versions of a document set item in a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DocumentSetVersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new version of a document set item in a list.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DocumentSetVersion | undefined, requestConfiguration?: DocumentSetVersionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDocumentSetVersion);
        return requestInfo;
    };
    /**
     * Get a list of the versions of a document set item in a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DocumentSetVersionCollectionResponse
     */
    public get(requestConfiguration?: DocumentSetVersionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DocumentSetVersionCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DocumentSetVersionCollectionResponse>(requestInfo,deserializeIntoDocumentSetVersionCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new version of a document set item in a list.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DocumentSetVersion
     */
    public post(body: DocumentSetVersion | undefined, requestConfiguration?: DocumentSetVersionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DocumentSetVersion | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DocumentSetVersion>(requestInfo,deserializeIntoDocumentSetVersion, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
