import {AccessReviewHistoryInstance} from '../../../../../models/accessReviewHistoryInstance';
import {AccessReviewHistoryInstanceCollectionResponse} from '../../../../../models/accessReviewHistoryInstanceCollectionResponse';
import {deserializeIntoAccessReviewHistoryInstance} from '../../../../../models/deserializeIntoAccessReviewHistoryInstance';
import {deserializeIntoAccessReviewHistoryInstanceCollectionResponse} from '../../../../../models/deserializeIntoAccessReviewHistoryInstanceCollectionResponse';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {serializeAccessReviewHistoryInstance} from '../../../../../models/serializeAccessReviewHistoryInstance';
import {serializeAccessReviewHistoryInstanceCollectionResponse} from '../../../../../models/serializeAccessReviewHistoryInstanceCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InstancesRequestBuilderGetRequestConfiguration} from './instancesRequestBuilderGetRequestConfiguration';
import {InstancesRequestBuilderPostRequestConfiguration} from './instancesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the instances property of the microsoft.graph.accessReviewHistoryDefinition entity. */
export class InstancesRequestBuilder {
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
     * Instantiates a new InstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition%2Did}/instances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the instances of an access review history definition created in the last 30 days.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to instances for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AccessReviewHistoryInstance | undefined, requestConfiguration?: InstancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewHistoryInstance);
        return requestInfo;
    };
    /**
     * Retrieve the instances of an access review history definition created in the last 30 days.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewHistoryInstanceCollectionResponse
     */
    public get(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewHistoryInstanceCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewHistoryInstanceCollectionResponse>(requestInfo,deserializeIntoAccessReviewHistoryInstanceCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to instances for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewHistoryInstance
     */
    public post(body: AccessReviewHistoryInstance | undefined, requestConfiguration?: InstancesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewHistoryInstance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewHistoryInstance>(requestInfo,deserializeIntoAccessReviewHistoryInstance, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
