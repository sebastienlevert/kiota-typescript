import {AccessPackageCatalog} from '../../../../models/accessPackageCatalog';
import {deserializeIntoAccessPackageCatalog} from '../../../../models/deserializeIntoAccessPackageCatalog';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeAccessPackageCatalog} from '../../../../models/serializeAccessPackageCatalog';
import {AccessPackageCatalogItemRequestBuilderDeleteRequestConfiguration} from './accessPackageCatalogItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageCatalogItemRequestBuilderGetRequestConfiguration} from './accessPackageCatalogItemRequestBuilderGetRequestConfiguration';
import {AccessPackageCatalogItemRequestBuilderPatchRequestConfiguration} from './accessPackageCatalogItemRequestBuilderPatchRequestConfiguration';
import {AccessPackagesRequestBuilder} from './accessPackages/accessPackagesRequestBuilder';
import {AccessPackageItemRequestBuilder} from './accessPackages/item/accessPackageItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity. */
export class AccessPackageCatalogItemRequestBuilder {
    /** Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity. */
    public get accessPackages(): AccessPackagesRequestBuilder {
        return new AccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public accessPackagesById(id: string) : AccessPackageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did"] = id
        return new AccessPackageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AccessPackageCatalogItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property catalogs for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessPackageCatalogItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A container for access packages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessPackageCatalogItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property catalogs in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessPackageCatalog | undefined, requestConfiguration?: AccessPackageCatalogItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageCatalog);
        return requestInfo;
    };
    /**
     * Delete navigation property catalogs for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageCatalogItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A container for access packages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageCatalog
     */
    public get(requestConfiguration?: AccessPackageCatalogItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageCatalog | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageCatalog>(requestInfo,deserializeIntoAccessPackageCatalog, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property catalogs in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageCatalog
     */
    public patch(body: AccessPackageCatalog | undefined, requestConfiguration?: AccessPackageCatalogItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageCatalog | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageCatalog>(requestInfo,deserializeIntoAccessPackageCatalog, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
