import {deserializeIntoPlannerPlan} from '../../../../../models/deserializeIntoPlannerPlan';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {PlannerPlan} from '../../../../../models/plannerPlan';
import {serializePlannerPlan} from '../../../../../models/serializePlannerPlan';
import {BucketsRequestBuilder} from './buckets/bucketsRequestBuilder';
import {PlannerBucketItemRequestBuilder} from './buckets/item/plannerBucketItemRequestBuilder';
import {DetailsRequestBuilder} from './details/detailsRequestBuilder';
import {PlannerPlanItemRequestBuilderDeleteRequestConfiguration} from './plannerPlanItemRequestBuilderDeleteRequestConfiguration';
import {PlannerPlanItemRequestBuilderGetRequestConfiguration} from './plannerPlanItemRequestBuilderGetRequestConfiguration';
import {PlannerPlanItemRequestBuilderPatchRequestConfiguration} from './plannerPlanItemRequestBuilderPatchRequestConfiguration';
import {PlannerTaskItemRequestBuilder} from './tasks/item/plannerTaskItemRequestBuilder';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the plans property of the microsoft.graph.plannerGroup entity. */
export class PlannerPlanItemRequestBuilder {
    /** Provides operations to manage the buckets property of the microsoft.graph.plannerPlan entity. */
    public get buckets(): BucketsRequestBuilder {
        return new BucketsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the details property of the microsoft.graph.plannerPlan entity. */
    public get details(): DetailsRequestBuilder {
        return new DetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the tasks property of the microsoft.graph.plannerPlan entity. */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the buckets property of the microsoft.graph.plannerPlan entity.
     * @param id Unique identifier of the item
     * @returns a PlannerBucketItemRequestBuilder
     */
    public bucketsById(id: string) : PlannerBucketItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerBucket%2Did"] = id
        return new PlannerBucketItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PlannerPlanItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/planner/plans/{plannerPlan%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property plans for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: PlannerPlanItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read-only. Nullable. Returns the plannerPlans owned by the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PlannerPlanItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property plans in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PlannerPlan | undefined, requestConfiguration?: PlannerPlanItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlannerPlan);
        return requestInfo;
    };
    /**
     * Delete navigation property plans for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: PlannerPlanItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read-only. Nullable. Returns the plannerPlans owned by the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PlannerPlan
     */
    public get(requestConfiguration?: PlannerPlanItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PlannerPlan | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PlannerPlan>(requestInfo,deserializeIntoPlannerPlan, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property plans in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PlannerPlan
     */
    public patch(body: PlannerPlan | undefined, requestConfiguration?: PlannerPlanItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PlannerPlan | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PlannerPlan>(requestInfo,deserializeIntoPlannerPlan, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.plannerPlan entity.
     * @param id Unique identifier of the item
     * @returns a PlannerTaskItemRequestBuilder
     */
    public tasksById(id: string) : PlannerTaskItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerTask%2Did"] = id
        return new PlannerTaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
