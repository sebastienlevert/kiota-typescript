import {deserializeIntoDeviceManagementExchangeConnector} from '../../models/deserializeIntoDeviceManagementExchangeConnector';
import {deserializeIntoDeviceManagementExchangeConnectorCollectionResponse} from '../../models/deserializeIntoDeviceManagementExchangeConnectorCollectionResponse';
import {DeviceManagementExchangeConnector} from '../../models/deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorCollectionResponse} from '../../models/deviceManagementExchangeConnectorCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDeviceManagementExchangeConnector} from '../../models/serializeDeviceManagementExchangeConnector';
import {serializeDeviceManagementExchangeConnectorCollectionResponse} from '../../models/serializeDeviceManagementExchangeConnectorCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExchangeConnectorsRequestBuilderGetRequestConfiguration} from './exchangeConnectorsRequestBuilderGetRequestConfiguration';
import {ExchangeConnectorsRequestBuilderPostRequestConfiguration} from './exchangeConnectorsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity. */
export class ExchangeConnectorsRequestBuilder {
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
     * Instantiates a new ExchangeConnectorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/exchangeConnectors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of Exchange Connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ExchangeConnectorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to exchangeConnectors for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: ExchangeConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementExchangeConnector);
        return requestInfo;
    };
    /**
     * The list of Exchange Connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementExchangeConnectorCollectionResponse
     */
    public get(requestConfiguration?: ExchangeConnectorsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementExchangeConnectorCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementExchangeConnectorCollectionResponse>(requestInfo,deserializeIntoDeviceManagementExchangeConnectorCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to exchangeConnectors for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementExchangeConnector
     */
    public post(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: ExchangeConnectorsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementExchangeConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceManagementExchangeConnector>(requestInfo,deserializeIntoDeviceManagementExchangeConnector, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
