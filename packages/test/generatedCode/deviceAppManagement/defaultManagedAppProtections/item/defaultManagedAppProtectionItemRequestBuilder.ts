import {DefaultManagedAppProtection} from '../../../models/defaultManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from '../../../models/deserializeIntoDefaultManagedAppProtection';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeDefaultManagedAppProtection} from '../../../models/serializeDefaultManagedAppProtection';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {ManagedMobileAppItemRequestBuilder} from './apps/item/managedMobileAppItemRequestBuilder';
import {DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration';
import {DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration';
import {DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration';
import {DeploymentSummaryRequestBuilder} from './deploymentSummary/deploymentSummaryRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity. */
export class DefaultManagedAppProtectionItemRequestBuilder {
    /** Provides operations to manage the apps property of the microsoft.graph.defaultManagedAppProtection entity. */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deploymentSummary property of the microsoft.graph.defaultManagedAppProtection entity. */
    public get deploymentSummary(): DeploymentSummaryRequestBuilder {
        return new DeploymentSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the apps property of the microsoft.graph.defaultManagedAppProtection entity.
     * @param id Unique identifier of the item
     * @returns a ManagedMobileAppItemRequestBuilder
     */
    public appsById(id: string) : ManagedMobileAppItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedMobileApp%2Did"] = id
        return new ManagedMobileAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DefaultManagedAppProtectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property defaultManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property defaultManagedAppProtections in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDefaultManagedAppProtection);
        return requestInfo;
    };
    /**
     * Delete navigation property defaultManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DefaultManagedAppProtection
     */
    public get(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DefaultManagedAppProtection>(requestInfo,deserializeIntoDefaultManagedAppProtection, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property defaultManagedAppProtections in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DefaultManagedAppProtection
     */
    public patch(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DefaultManagedAppProtection>(requestInfo,deserializeIntoDefaultManagedAppProtection, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
