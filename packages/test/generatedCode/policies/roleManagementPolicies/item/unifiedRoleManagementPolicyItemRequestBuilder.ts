import {deserializeIntoUnifiedRoleManagementPolicy} from '../../../models/deserializeIntoUnifiedRoleManagementPolicy';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleManagementPolicy} from '../../../models/serializeUnifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicy} from '../../../models/unifiedRoleManagementPolicy';
import {EffectiveRulesRequestBuilder} from './effectiveRules/effectiveRulesRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as i411c4866dd207c52fa1e25aa6fa09f7cc2ba5ff72e4177bbe85d9ac32304e37c} from './effectiveRules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as ib0d5b1a2c11f4cf40dce9ee02c8007193afa420d2ad20b7b81cc0763876246fe} from './rules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {RulesRequestBuilder} from './rules/rulesRequestBuilder';
import {UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity. */
export class UnifiedRoleManagementPolicyItemRequestBuilder {
    /** Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity. */
    public get effectiveRules(): EffectiveRulesRequestBuilder {
        return new EffectiveRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity. */
    public get rules(): RulesRequestBuilder {
        return new RulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleManagementPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleManagementPolicy);
        return requestInfo;
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public effectiveRulesById(id: string) : i411c4866dd207c52fa1e25aa6fa09f7cc2ba5ff72e4177bbe85d9ac32304e37c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new i411c4866dd207c52fa1e25aa6fa09f7cc2ba5ff72e4177bbe85d9ac32304e37c(urlTplParams, this.requestAdapter);
    };
    /**
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public get(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicy>(requestInfo,deserializeIntoUnifiedRoleManagementPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public patch(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicy>(requestInfo,deserializeIntoUnifiedRoleManagementPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public rulesById(id: string) : ib0d5b1a2c11f4cf40dce9ee02c8007193afa420d2ad20b7b81cc0763876246fe {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new ib0d5b1a2c11f4cf40dce9ee02c8007193afa420d2ad20b7b81cc0763876246fe(urlTplParams, this.requestAdapter);
    };
}
