import {deserializeIntoPlanner} from '../models/deserializeIntoPlanner';
import {ODataError} from '../models/oDataErrors/oDataError';
import {Planner} from '../models/planner';
import {serializePlanner} from '../models/serializePlanner';
import {BucketsRequestBuilder} from './buckets/bucketsRequestBuilder';
import {PlannerBucketItemRequestBuilder} from './buckets/item/plannerBucketItemRequestBuilder';
import {PlannerRequestBuilderGetRequestConfiguration} from './plannerRequestBuilderGetRequestConfiguration';
import {PlannerRequestBuilderPatchRequestConfiguration} from './plannerRequestBuilderPatchRequestConfiguration';
import {PlannerPlanItemRequestBuilder} from './plans/item/plannerPlanItemRequestBuilder';
import {PlansRequestBuilder} from './plans/plansRequestBuilder';
import {PlannerTaskItemRequestBuilder} from './tasks/item/plannerTaskItemRequestBuilder';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the planner singleton. */
export class PlannerRequestBuilder {
    /** Provides operations to manage the buckets property of the microsoft.graph.planner entity. */
    public get buckets(): BucketsRequestBuilder {
        return new BucketsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to manage the plans property of the microsoft.graph.planner entity. */
    public get plans(): PlansRequestBuilder {
        return new PlansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the tasks property of the microsoft.graph.planner entity. */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the buckets property of the microsoft.graph.planner entity.
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
     * Instantiates a new PlannerRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/planner{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PlannerRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update planner
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Planner | undefined, requestConfiguration?: PlannerRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlanner);
        return requestInfo;
    };
    /**
     * Get planner
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    public get(requestConfiguration?: PlannerRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Planner | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Planner>(requestInfo,deserializeIntoPlanner, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update planner
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    public patch(body: Planner | undefined, requestConfiguration?: PlannerRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Planner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Planner>(requestInfo,deserializeIntoPlanner, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the plans property of the microsoft.graph.planner entity.
     * @param id Unique identifier of the item
     * @returns a PlannerPlanItemRequestBuilder
     */
    public plansById(id: string) : PlannerPlanItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["plannerPlan%2Did"] = id
        return new PlannerPlanItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.planner entity.
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
