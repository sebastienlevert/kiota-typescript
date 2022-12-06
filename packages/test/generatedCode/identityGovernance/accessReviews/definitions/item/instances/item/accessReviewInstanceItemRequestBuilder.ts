import {AccessReviewInstance} from '../../../../../../models/accessReviewInstance';
import {deserializeIntoAccessReviewInstance} from '../../../../../../models/deserializeIntoAccessReviewInstance';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeAccessReviewInstance} from '../../../../../../models/serializeAccessReviewInstance';
import {AcceptRecommendationsRequestBuilder} from './acceptRecommendations/acceptRecommendationsRequestBuilder';
import {AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration} from './accessReviewInstanceItemRequestBuilderDeleteRequestConfiguration';
import {AccessReviewInstanceItemRequestBuilderGetRequestConfiguration} from './accessReviewInstanceItemRequestBuilderGetRequestConfiguration';
import {AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration} from './accessReviewInstanceItemRequestBuilderPatchRequestConfiguration';
import {ApplyDecisionsRequestBuilder} from './applyDecisions/applyDecisionsRequestBuilder';
import {BatchRecordDecisionsRequestBuilder} from './batchRecordDecisions/batchRecordDecisionsRequestBuilder';
import {ContactedReviewersRequestBuilder} from './contactedReviewers/contactedReviewersRequestBuilder';
import {AccessReviewReviewerItemRequestBuilder} from './contactedReviewers/item/accessReviewReviewerItemRequestBuilder';
import {DecisionsRequestBuilder} from './decisions/decisionsRequestBuilder';
import {AccessReviewInstanceDecisionItemItemRequestBuilder} from './decisions/item/accessReviewInstanceDecisionItemItemRequestBuilder';
import {ResetDecisionsRequestBuilder} from './resetDecisions/resetDecisionsRequestBuilder';
import {SendReminderRequestBuilder} from './sendReminder/sendReminderRequestBuilder';
import {AccessReviewStageItemRequestBuilder} from './stages/item/accessReviewStageItemRequestBuilder';
import {StagesRequestBuilder} from './stages/stagesRequestBuilder';
import {StopRequestBuilder} from './stop/stopRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the instances property of the microsoft.graph.accessReviewScheduleDefinition entity. */
export class AccessReviewInstanceItemRequestBuilder {
    /** Provides operations to call the acceptRecommendations method. */
    public get acceptRecommendations(): AcceptRecommendationsRequestBuilder {
        return new AcceptRecommendationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyDecisions method. */
    public get applyDecisions(): ApplyDecisionsRequestBuilder {
        return new ApplyDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the batchRecordDecisions method. */
    public get batchRecordDecisions(): BatchRecordDecisionsRequestBuilder {
        return new BatchRecordDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity. */
    public get contactedReviewers(): ContactedReviewersRequestBuilder {
        return new ContactedReviewersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity. */
    public get decisions(): DecisionsRequestBuilder {
        return new DecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the resetDecisions method. */
    public get resetDecisions(): ResetDecisionsRequestBuilder {
        return new ResetDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendReminder method. */
    public get sendReminder(): SendReminderRequestBuilder {
        return new SendReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity. */
    public get stages(): StagesRequestBuilder {
        return new StagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stop method. */
    public get stop(): StopRequestBuilder {
        return new StopRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AccessReviewInstanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity.
     * @param id Unique identifier of the item
     * @returns a AccessReviewReviewerItemRequestBuilder
     */
    public contactedReviewersById(id: string) : AccessReviewReviewerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewReviewer%2Did"] = id
        return new AccessReviewReviewerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property instances for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessReviewInstanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property instances in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessReviewInstance | undefined, requestConfiguration?: AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewInstance);
        return requestInfo;
    };
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity.
     * @param id Unique identifier of the item
     * @returns a AccessReviewInstanceDecisionItemItemRequestBuilder
     */
    public decisionsById(id: string) : AccessReviewInstanceDecisionItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewInstanceDecisionItem%2Did"] = id
        return new AccessReviewInstanceDecisionItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property instances for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessReviewInstanceItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public get(requestConfiguration?: AccessReviewInstanceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewInstance>(requestInfo,deserializeIntoAccessReviewInstance, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property instances in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public patch(body: AccessReviewInstance | undefined, requestConfiguration?: AccessReviewInstanceItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessReviewInstance>(requestInfo,deserializeIntoAccessReviewInstance, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity.
     * @param id Unique identifier of the item
     * @returns a AccessReviewStageItemRequestBuilder
     */
    public stagesById(id: string) : AccessReviewStageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewStage%2Did"] = id
        return new AccessReviewStageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
