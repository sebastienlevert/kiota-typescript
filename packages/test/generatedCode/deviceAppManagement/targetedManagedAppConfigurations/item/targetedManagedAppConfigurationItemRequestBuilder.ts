import {deserializeIntoTargetedManagedAppConfiguration} from '../../../models/deserializeIntoTargetedManagedAppConfiguration';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeTargetedManagedAppConfiguration} from '../../../models/serializeTargetedManagedAppConfiguration';
import {TargetedManagedAppConfiguration} from '../../../models/targetedManagedAppConfiguration';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {ManagedMobileAppItemRequestBuilder} from './apps/item/managedMobileAppItemRequestBuilder';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {TargetedManagedAppPolicyAssignmentItemRequestBuilder} from './assignments/item/targetedManagedAppPolicyAssignmentItemRequestBuilder';
import {DeploymentSummaryRequestBuilder} from './deploymentSummary/deploymentSummaryRequestBuilder';
import {TargetAppsRequestBuilder} from './targetApps/targetAppsRequestBuilder';
import {TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration} from './targetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration} from './targetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration';
import {TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration} from './targetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity. */
export class TargetedManagedAppConfigurationItemRequestBuilder {
    /** Provides operations to manage the apps property of the microsoft.graph.targetedManagedAppConfiguration entity. */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the assign method. */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppConfiguration entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deploymentSummary property of the microsoft.graph.targetedManagedAppConfiguration entity. */
    public get deploymentSummary(): DeploymentSummaryRequestBuilder {
        return new DeploymentSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the targetApps method. */
    public get targetApps(): TargetAppsRequestBuilder {
        return new TargetAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the apps property of the microsoft.graph.targetedManagedAppConfiguration entity.
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
     * Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a TargetedManagedAppPolicyAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : TargetedManagedAppPolicyAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["targetedManagedAppPolicyAssignment%2Did"] = id
        return new TargetedManagedAppPolicyAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TargetedManagedAppConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property targetedManagedAppConfigurations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Targeted managed app configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property targetedManagedAppConfigurations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: TargetedManagedAppConfiguration | undefined, requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTargetedManagedAppConfiguration);
        return requestInfo;
    };
    /**
     * Delete navigation property targetedManagedAppConfigurations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Targeted managed app configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TargetedManagedAppConfiguration
     */
    public get(requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TargetedManagedAppConfiguration>(requestInfo,deserializeIntoTargetedManagedAppConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property targetedManagedAppConfigurations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TargetedManagedAppConfiguration
     */
    public patch(body: TargetedManagedAppConfiguration | undefined, requestConfiguration?: TargetedManagedAppConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TargetedManagedAppConfiguration>(requestInfo,deserializeIntoTargetedManagedAppConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
