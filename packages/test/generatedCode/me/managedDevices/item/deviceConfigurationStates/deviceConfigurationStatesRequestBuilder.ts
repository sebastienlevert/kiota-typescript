import {deserializeIntoDeviceConfigurationState} from '../../../../models/deserializeIntoDeviceConfigurationState';
import {deserializeIntoDeviceConfigurationStateCollectionResponse} from '../../../../models/deserializeIntoDeviceConfigurationStateCollectionResponse';
import {DeviceConfigurationState} from '../../../../models/deviceConfigurationState';
import {DeviceConfigurationStateCollectionResponse} from '../../../../models/deviceConfigurationStateCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeDeviceConfigurationState} from '../../../../models/serializeDeviceConfigurationState';
import {serializeDeviceConfigurationStateCollectionResponse} from '../../../../models/serializeDeviceConfigurationStateCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceConfigurationStatesRequestBuilderGetRequestConfiguration} from './deviceConfigurationStatesRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationStatesRequestBuilderPostRequestConfiguration} from './deviceConfigurationStatesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity. */
export class DeviceConfigurationStatesRequestBuilder {
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
     * Instantiates a new DeviceConfigurationStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/managedDevices/{managedDevice%2Did}/deviceConfigurationStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceConfigurationStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceConfigurationStates for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DeviceConfigurationState | undefined, requestConfiguration?: DeviceConfigurationStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationState);
        return requestInfo;
    };
    /**
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfigurationStateCollectionResponse
     */
    public get(requestConfiguration?: DeviceConfigurationStatesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfigurationStateCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceConfigurationStateCollectionResponse>(requestInfo,deserializeIntoDeviceConfigurationStateCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceConfigurationStates for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfigurationState
     */
    public post(body: DeviceConfigurationState | undefined, requestConfiguration?: DeviceConfigurationStatesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfigurationState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceConfigurationState>(requestInfo,deserializeIntoDeviceConfigurationState, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
