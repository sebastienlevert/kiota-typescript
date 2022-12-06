import {AccessReviewInstanceDecisionItem} from '../../../../../../../../../models/accessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItemCollectionResponse} from '../../../../../../../../../models/accessReviewInstanceDecisionItemCollectionResponse';
import {deserializeIntoAccessReviewInstanceDecisionItem} from '../../../../../../../../../models/deserializeIntoAccessReviewInstanceDecisionItem';
import {deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse} from '../../../../../../../../../models/deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse';
import {ODataError} from '../../../../../../../../../models/oDataErrors/oDataError';
import {serializeAccessReviewInstanceDecisionItem} from '../../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewInstanceDecisionItemCollectionResponse} from '../../../../../../../../../models/serializeAccessReviewInstanceDecisionItemCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DecisionsRequestBuilderGetRequestConfiguration} from './decisionsRequestBuilderGetRequestConfiguration';
import {DecisionsRequestBuilderPostRequestConfiguration} from './decisionsRequestBuilderPostRequestConfiguration';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity. */
export class DecisionsRequestBuilder {
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
     * Instantiates a new DecisionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DecisionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to decisions for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AccessReviewInstanceDecisionItem | undefined, requestConfiguration?: DecisionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewInstanceDecisionItem);
        return requestInfo;
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstanceDecisionItemCollectionResponse
     */
    public get(requestConfiguration?: DecisionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstanceDecisionItemCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewInstanceDecisionItemCollectionResponse>(requestInfo,deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to decisions for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstanceDecisionItem
     */
    public post(body: AccessReviewInstanceDecisionItem | undefined, requestConfiguration?: DecisionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewInstanceDecisionItem>(requestInfo,deserializeIntoAccessReviewInstanceDecisionItem, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
