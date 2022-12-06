import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatus} from '../../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserStatus} from '../../../../../models/managedDeviceMobileAppConfigurationUserStatus';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from '../../../../../models/serializeManagedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration} from './managedDeviceMobileAppConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderGetRequestConfiguration} from './managedDeviceMobileAppConfigurationUserStatusItemRequestBuilderGetRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration} from './managedDeviceMobileAppConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the userStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
export class ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property userStatuses for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userStatuses in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationUserStatus | undefined, requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedDeviceMobileAppConfigurationUserStatus);
        return requestInfo;
    };
    /**
     * Delete navigation property userStatuses for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserStatus
     */
    public get(requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserStatus | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationUserStatus>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationUserStatus, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property userStatuses in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserStatus
     */
    public patch(body: ManagedDeviceMobileAppConfigurationUserStatus | undefined, requestConfiguration?: ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationUserStatus>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationUserStatus, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
