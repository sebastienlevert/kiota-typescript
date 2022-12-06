import {AccessReviewHistoryDefinition} from '../../../models/accessReviewHistoryDefinition';
import {AccessReviewHistoryDefinitionCollectionResponse} from '../../../models/accessReviewHistoryDefinitionCollectionResponse';
import {deserializeIntoAccessReviewHistoryDefinition} from '../../../models/deserializeIntoAccessReviewHistoryDefinition';
import {deserializeIntoAccessReviewHistoryDefinitionCollectionResponse} from '../../../models/deserializeIntoAccessReviewHistoryDefinitionCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeAccessReviewHistoryDefinition} from '../../../models/serializeAccessReviewHistoryDefinition';
import {serializeAccessReviewHistoryDefinitionCollectionResponse} from '../../../models/serializeAccessReviewHistoryDefinitionCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HistoryDefinitionsRequestBuilderGetRequestConfiguration} from './historyDefinitionsRequestBuilderGetRequestConfiguration';
import {HistoryDefinitionsRequestBuilderPostRequestConfiguration} from './historyDefinitionsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the historyDefinitions property of the microsoft.graph.accessReviewSet entity. */
export class HistoryDefinitionsRequestBuilder {
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
     * Instantiates a new HistoryDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/historyDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: HistoryDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessReviewHistoryDefinition object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AccessReviewHistoryDefinition | undefined, requestConfiguration?: HistoryDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewHistoryDefinition);
        return requestInfo;
    };
    /**
     * Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewHistoryDefinitionCollectionResponse
     */
    public get(requestConfiguration?: HistoryDefinitionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewHistoryDefinitionCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewHistoryDefinitionCollectionResponse>(requestInfo,deserializeIntoAccessReviewHistoryDefinitionCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new accessReviewHistoryDefinition object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewHistoryDefinition
     */
    public post(body: AccessReviewHistoryDefinition | undefined, requestConfiguration?: HistoryDefinitionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewHistoryDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewHistoryDefinition>(requestInfo,deserializeIntoAccessReviewHistoryDefinition, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
