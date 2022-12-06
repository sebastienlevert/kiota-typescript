import {deserializeIntoUnifiedRoleManagementPolicyRule} from '../../../../models/deserializeIntoUnifiedRoleManagementPolicyRule';
import {deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse} from '../../../../models/deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleManagementPolicyRule} from '../../../../models/serializeUnifiedRoleManagementPolicyRule';
import {serializeUnifiedRoleManagementPolicyRuleCollectionResponse} from '../../../../models/serializeUnifiedRoleManagementPolicyRuleCollectionResponse';
import {UnifiedRoleManagementPolicyRule} from '../../../../models/unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleCollectionResponse} from '../../../../models/unifiedRoleManagementPolicyRuleCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RulesRequestBuilderGetRequestConfiguration} from './rulesRequestBuilderGetRequestConfiguration';
import {RulesRequestBuilderPostRequestConfiguration} from './rulesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity. */
export class RulesRequestBuilder {
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
     * Instantiates a new RulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}/rules{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to rules for policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UnifiedRoleManagementPolicyRule | undefined, requestConfiguration?: RulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleManagementPolicyRule);
        return requestInfo;
    };
    /**
     * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyRuleCollectionResponse
     */
    public get(requestConfiguration?: RulesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyRuleCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyRuleCollectionResponse>(requestInfo,deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to rules for policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyRule
     */
    public post(body: UnifiedRoleManagementPolicyRule | undefined, requestConfiguration?: RulesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyRule>(requestInfo,deserializeIntoUnifiedRoleManagementPolicyRule, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
