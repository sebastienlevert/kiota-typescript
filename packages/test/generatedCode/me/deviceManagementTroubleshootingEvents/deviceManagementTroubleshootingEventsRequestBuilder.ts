import {deserializeIntoDeviceManagementTroubleshootingEvent} from '../../models/deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse} from '../../models/deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse';
import {DeviceManagementTroubleshootingEvent} from '../../models/deviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventCollectionResponse} from '../../models/deviceManagementTroubleshootingEventCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDeviceManagementTroubleshootingEvent} from '../../models/serializeDeviceManagementTroubleshootingEvent';
import {serializeDeviceManagementTroubleshootingEventCollectionResponse} from '../../models/serializeDeviceManagementTroubleshootingEventCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceManagementTroubleshootingEventsRequestBuilderGetRequestConfiguration} from './deviceManagementTroubleshootingEventsRequestBuilderGetRequestConfiguration';
import {DeviceManagementTroubleshootingEventsRequestBuilderPostRequestConfiguration} from './deviceManagementTroubleshootingEventsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagementTroubleshootingEvents property of the microsoft.graph.user entity. */
export class DeviceManagementTroubleshootingEventsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DeviceManagementTroubleshootingEventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/deviceManagementTroubleshootingEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of troubleshooting events for this user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceManagementTroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceManagementTroubleshootingEvents for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DeviceManagementTroubleshootingEvent | undefined, requestConfiguration?: DeviceManagementTroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementTroubleshootingEvent);
        return requestInfo;
    };
    /**
     * The list of troubleshooting events for this user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementTroubleshootingEventCollectionResponse
     */
    public get(requestConfiguration?: DeviceManagementTroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementTroubleshootingEventCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementTroubleshootingEventCollectionResponse>(requestInfo,deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceManagementTroubleshootingEvents for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementTroubleshootingEvent
     */
    public post(body: DeviceManagementTroubleshootingEvent | undefined, requestConfiguration?: DeviceManagementTroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementTroubleshootingEvent | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementTroubleshootingEvent>(requestInfo,deserializeIntoDeviceManagementTroubleshootingEvent, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
