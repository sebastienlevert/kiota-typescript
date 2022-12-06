import {AccessPackage} from '../../../../models/accessPackage';
import {deserializeIntoAccessPackage} from '../../../../models/deserializeIntoAccessPackage';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeAccessPackage} from '../../../../models/serializeAccessPackage';
import {AccessPackageItemRequestBuilderDeleteRequestConfiguration} from './accessPackageItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageItemRequestBuilderGetRequestConfiguration} from './accessPackageItemRequestBuilderGetRequestConfiguration';
import {AccessPackageItemRequestBuilderPatchRequestConfiguration} from './accessPackageItemRequestBuilderPatchRequestConfiguration';
import {AccessPackagesIncompatibleWithRequestBuilder} from './accessPackagesIncompatibleWith/accessPackagesIncompatibleWithRequestBuilder';
import {AccessPackageItemRequestBuilder as ia0f0fc71a7ab59b9d68562a53a2789bd0e809c3e23abfd194c4069e05e6c0537} from './accessPackagesIncompatibleWith/item/accessPackageItemRequestBuilder';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilder} from './assignmentPolicies/item/accessPackageAssignmentPolicyItemRequestBuilder';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {GetApplicablePolicyRequirementsRequestBuilder} from './getApplicablePolicyRequirements/getApplicablePolicyRequirementsRequestBuilder';
import {IncompatibleAccessPackagesRequestBuilder} from './incompatibleAccessPackages/incompatibleAccessPackagesRequestBuilder';
import {AccessPackageItemRequestBuilder as i3c6e9e7748a46cbfe45db8a411b5176ab2e222256961b3a5cb00a69fe96ab53a} from './incompatibleAccessPackages/item/accessPackageItemRequestBuilder';
import {IncompatibleGroupsRequestBuilder} from './incompatibleGroups/incompatibleGroupsRequestBuilder';
import {GroupItemRequestBuilder} from './incompatibleGroups/item/groupItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the accessPackages property of the microsoft.graph.entitlementManagement entity. */
export class AccessPackageItemRequestBuilder {
    /** Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity. */
    public get accessPackagesIncompatibleWith(): AccessPackagesIncompatibleWithRequestBuilder {
        return new AccessPackagesIncompatibleWithRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity. */
    public get assignmentPolicies(): AssignmentPoliciesRequestBuilder {
        return new AssignmentPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the catalog property of the microsoft.graph.accessPackage entity. */
    public get catalog(): CatalogRequestBuilder {
        return new CatalogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getApplicablePolicyRequirements method. */
    public get getApplicablePolicyRequirements(): GetApplicablePolicyRequirementsRequestBuilder {
        return new GetApplicablePolicyRequirementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleAccessPackages property of the microsoft.graph.accessPackage entity. */
    public get incompatibleAccessPackages(): IncompatibleAccessPackagesRequestBuilder {
        return new IncompatibleAccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleGroups property of the microsoft.graph.accessPackage entity. */
    public get incompatibleGroups(): IncompatibleGroupsRequestBuilder {
        return new IncompatibleGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public accessPackagesIncompatibleWithById(id: string) : ia0f0fc71a7ab59b9d68562a53a2789bd0e809c3e23abfd194c4069e05e6c0537 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did1"] = id
        return new ia0f0fc71a7ab59b9d68562a53a2789bd0e809c3e23abfd194c4069e05e6c0537(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageAssignmentPolicyItemRequestBuilder
     */
    public assignmentPoliciesById(id: string) : AccessPackageAssignmentPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentPolicy%2Did"] = id
        return new AccessPackageAssignmentPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AccessPackageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property accessPackages in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackage);
        return requestInfo;
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackage
     */
    public get(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackage | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackage>(requestInfo,deserializeIntoAccessPackage, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.identityGovernance.entitlementManagement.accessPackages.item.incompatibleAccessPackages.item collection
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public incompatibleAccessPackagesById(id: string) : i3c6e9e7748a46cbfe45db8a411b5176ab2e222256961b3a5cb00a69fe96ab53a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did1"] = id
        return new i3c6e9e7748a46cbfe45db8a411b5176ab2e222256961b3a5cb00a69fe96ab53a(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.identityGovernance.entitlementManagement.accessPackages.item.incompatibleGroups.item collection
     * @param id Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public incompatibleGroupsById(id: string) : GroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did"] = id
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property accessPackages in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackage
     */
    public patch(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackage>(requestInfo,deserializeIntoAccessPackage, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
