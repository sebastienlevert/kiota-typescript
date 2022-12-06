import {AccessPackageAssignmentPolicy} from '../../../../../../../../models/accessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageAssignmentPolicy} from '../../../../../../../../models/deserializeIntoAccessPackageAssignmentPolicy';
import {ODataError} from '../../../../../../../../models/oDataErrors/oDataError';
import {serializeAccessPackageAssignmentPolicy} from '../../../../../../../../models/serializeAccessPackageAssignmentPolicy';
import {AccessPackageRequestBuilder} from './accessPackage/accessPackageRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration';
import {AccessPackageAssignmentPolicyItemRequestBuilderPatchRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderPatchRequestConfiguration';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity. */
export class AccessPackageAssignmentPolicyItemRequestBuilder {
    /** Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentPolicy entity. */
    public get accessPackage(): AccessPackageRequestBuilder {
        return new AccessPackageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the catalog property of the microsoft.graph.accessPackageAssignmentPolicy entity. */
    public get catalog(): CatalogRequestBuilder {
        return new CatalogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AccessPackageAssignmentPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/accessPackages/{accessPackage%2Did}/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property assignmentPolicies for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get assignmentPolicies from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignmentPolicies in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageAssignmentPolicy);
        return requestInfo;
    };
    /**
     * Delete navigation property assignmentPolicies for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get assignmentPolicies from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentPolicy
     */
    public get(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentPolicy>(requestInfo,deserializeIntoAccessPackageAssignmentPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property assignmentPolicies in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentPolicy
     */
    public patch(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentPolicy>(requestInfo,deserializeIntoAccessPackageAssignmentPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
