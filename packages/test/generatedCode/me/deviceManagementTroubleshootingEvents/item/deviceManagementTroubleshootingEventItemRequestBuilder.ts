import {deserializeIntoDeviceManagementTroubleshootingEvent} from '../../../models/deserializeIntoDeviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEvent} from '../../../models/deviceManagementTroubleshootingEvent';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeDeviceManagementTroubleshootingEvent} from '../../../models/serializeDeviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration} from './deviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration';
import {DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration} from './deviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration';
import {DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration} from './deviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagementTroubleshootingEvents property of the microsoft.graph.user entity. */
export class DeviceManagementTroubleshootingEventItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DeviceManagementTroubleshootingEventItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property deviceManagementTroubleshootingEvents for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of troubleshooting events for this user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceManagementTroubleshootingEvents in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceManagementTroubleshootingEvent | undefined, requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementTroubleshootingEvent);
        return requestInfo;
    };
    /**
     * Delete navigation property deviceManagementTroubleshootingEvents for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of troubleshooting events for this user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public get(requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo,deserializeIntoDeviceManagementTroubleshootingEvent, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property deviceManagementTroubleshootingEvents in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public patch(body: DeviceManagementTroubleshootingEvent | undefined, requestConfiguration?: DeviceManagementTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo,deserializeIntoDeviceManagementTroubleshootingEvent, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
