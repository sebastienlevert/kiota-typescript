import {deserializeIntoMobileThreatDefenseConnector} from '../../models/deserializeIntoMobileThreatDefenseConnector';
import {deserializeIntoMobileThreatDefenseConnectorCollectionResponse} from '../../models/deserializeIntoMobileThreatDefenseConnectorCollectionResponse';
import {MobileThreatDefenseConnector} from '../../models/mobileThreatDefenseConnector';
import {MobileThreatDefenseConnectorCollectionResponse} from '../../models/mobileThreatDefenseConnectorCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeMobileThreatDefenseConnector} from '../../models/serializeMobileThreatDefenseConnector';
import {serializeMobileThreatDefenseConnectorCollectionResponse} from '../../models/serializeMobileThreatDefenseConnectorCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration} from './mobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration';
import {MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration} from './mobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity. */
export class MobileThreatDefenseConnectorsRequestBuilder {
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
     * Instantiates a new MobileThreatDefenseConnectorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/mobileThreatDefenseConnectors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileThreatDefenseConnector);
        return requestInfo;
    };
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileThreatDefenseConnectorCollectionResponse
     */
    public get(requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileThreatDefenseConnectorCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MobileThreatDefenseConnectorCollectionResponse>(requestInfo,deserializeIntoMobileThreatDefenseConnectorCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileThreatDefenseConnector
     */
    public post(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileThreatDefenseConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MobileThreatDefenseConnector>(requestInfo,deserializeIntoMobileThreatDefenseConnector, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
