import {deserializeIntoWindowsAutopilotDeviceIdentity} from '../../models/deserializeIntoWindowsAutopilotDeviceIdentity';
import {deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse} from '../../models/deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeWindowsAutopilotDeviceIdentity} from '../../models/serializeWindowsAutopilotDeviceIdentity';
import {serializeWindowsAutopilotDeviceIdentityCollectionResponse} from '../../models/serializeWindowsAutopilotDeviceIdentityCollectionResponse';
import {WindowsAutopilotDeviceIdentity} from '../../models/windowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentityCollectionResponse} from '../../models/windowsAutopilotDeviceIdentityCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration} from './windowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration';
import {WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration} from './windowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity. */
export class WindowsAutopilotDeviceIdentitiesRequestBuilder {
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
     * Instantiates a new WindowsAutopilotDeviceIdentitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/windowsAutopilotDeviceIdentities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to windowsAutopilotDeviceIdentities for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
    /**
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsAutopilotDeviceIdentityCollectionResponse
     */
    public get(requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsAutopilotDeviceIdentityCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsAutopilotDeviceIdentityCollectionResponse>(requestInfo,deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to windowsAutopilotDeviceIdentities for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     */
    public post(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo,deserializeIntoWindowsAutopilotDeviceIdentity, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
