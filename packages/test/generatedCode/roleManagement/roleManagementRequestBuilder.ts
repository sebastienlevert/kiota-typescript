import {deserializeIntoRoleManagement} from '../models/deserializeIntoRoleManagement';
import {ODataError} from '../models/oDataErrors/oDataError';
import {RoleManagement} from '../models/roleManagement';
import {serializeRoleManagement} from '../models/serializeRoleManagement';
import {DirectoryRequestBuilder} from './directory/directoryRequestBuilder';
import {EntitlementManagementRequestBuilder} from './entitlementManagement/entitlementManagementRequestBuilder';
import {RoleManagementRequestBuilderGetRequestConfiguration} from './roleManagementRequestBuilderGetRequestConfiguration';
import {RoleManagementRequestBuilderPatchRequestConfiguration} from './roleManagementRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class RoleManagementRequestBuilder {
    /** Provides operations to manage the directory property of the microsoft.graph.roleManagement entity. */
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the entitlementManagement property of the microsoft.graph.roleManagement entity. */
    public get entitlementManagement(): EntitlementManagementRequestBuilder {
        return new EntitlementManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new RoleManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RoleManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: RoleManagement | undefined, requestConfiguration?: RoleManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRoleManagement);
        return requestInfo;
    };
    /**
     * Get roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RoleManagement
     */
    public get(requestConfiguration?: RoleManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RoleManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RoleManagement>(requestInfo,deserializeIntoRoleManagement, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RoleManagement
     */
    public patch(body: RoleManagement | undefined, requestConfiguration?: RoleManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RoleManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RoleManagement>(requestInfo,deserializeIntoRoleManagement, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
