import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from '../../../../models/managedDeviceMobileAppConfigurationDeviceSummary';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeManagedDeviceMobileAppConfigurationDeviceSummary} from '../../../../models/serializeManagedDeviceMobileAppConfigurationDeviceSummary';
import {DeviceStatusSummaryRequestBuilderDeleteRequestConfiguration} from './deviceStatusSummaryRequestBuilderDeleteRequestConfiguration';
import {DeviceStatusSummaryRequestBuilderGetRequestConfiguration} from './deviceStatusSummaryRequestBuilderGetRequestConfiguration';
import {DeviceStatusSummaryRequestBuilderPatchRequestConfiguration} from './deviceStatusSummaryRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceStatusSummary property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
export class DeviceStatusSummaryRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DeviceStatusSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/deviceStatusSummary{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property deviceStatusSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DeviceStatusSummaryRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * App configuration device status summary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceStatusSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceStatusSummary in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined, requestConfiguration?: DeviceStatusSummaryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedDeviceMobileAppConfigurationDeviceSummary);
        return requestInfo;
    };
    /**
     * Delete navigation property deviceStatusSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceStatusSummaryRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * App configuration device status summary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceSummary
     */
    public get(requestConfiguration?: DeviceStatusSummaryRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceSummary | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationDeviceSummary>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property deviceStatusSummary in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceSummary
     */
    public patch(body: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined, requestConfiguration?: DeviceStatusSummaryRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationDeviceSummary>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
