import {deserializeIntoUnifiedRoleDefinition} from '../../../../models/deserializeIntoUnifiedRoleDefinition';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleDefinition} from '../../../../models/serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from '../../../../models/unifiedRoleDefinition';
import {InheritsPermissionsFromRequestBuilder} from './inheritsPermissionsFrom/inheritsPermissionsFromRequestBuilder';
import {UnifiedRoleDefinitionItemRequestBuilder as i334c622434b00a13e9e95f5faac63cbc9c7061409fa6f0e91eefcdba29479789} from './inheritsPermissionsFrom/item/unifiedRoleDefinitionItemRequestBuilder';
import {UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity. */
export class UnifiedRoleDefinitionItemRequestBuilder {
    /** Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity. */
    public get inheritsPermissionsFrom(): InheritsPermissionsFromRequestBuilder {
        return new InheritsPermissionsFromRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleDefinitions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleDefinitions in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UnifiedRoleDefinition | undefined, requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleDefinition);
        return requestInfo;
    };
    /**
     * Delete navigation property roleDefinitions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinition
     */
    public get(requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinition>(requestInfo,deserializeIntoUnifiedRoleDefinition, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleDefinitionItemRequestBuilder
     */
    public inheritsPermissionsFromById(id: string) : i334c622434b00a13e9e95f5faac63cbc9c7061409fa6f0e91eefcdba29479789 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleDefinition%2Did1"] = id
        return new i334c622434b00a13e9e95f5faac63cbc9c7061409fa6f0e91eefcdba29479789(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property roleDefinitions in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleDefinition
     */
    public patch(body: UnifiedRoleDefinition | undefined, requestConfiguration?: UnifiedRoleDefinitionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleDefinition>(requestInfo,deserializeIntoUnifiedRoleDefinition, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
