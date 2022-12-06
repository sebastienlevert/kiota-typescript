import {deserializeIntoRemoteAssistancePartner} from '../../models/deserializeIntoRemoteAssistancePartner';
import {deserializeIntoRemoteAssistancePartnerCollectionResponse} from '../../models/deserializeIntoRemoteAssistancePartnerCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {RemoteAssistancePartner} from '../../models/remoteAssistancePartner';
import {RemoteAssistancePartnerCollectionResponse} from '../../models/remoteAssistancePartnerCollectionResponse';
import {serializeRemoteAssistancePartner} from '../../models/serializeRemoteAssistancePartner';
import {serializeRemoteAssistancePartnerCollectionResponse} from '../../models/serializeRemoteAssistancePartnerCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RemoteAssistancePartnersRequestBuilderGetRequestConfiguration} from './remoteAssistancePartnersRequestBuilderGetRequestConfiguration';
import {RemoteAssistancePartnersRequestBuilderPostRequestConfiguration} from './remoteAssistancePartnersRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity. */
export class RemoteAssistancePartnersRequestBuilder {
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
     * Instantiates a new RemoteAssistancePartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/remoteAssistancePartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The remote assist partners.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RemoteAssistancePartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to remoteAssistancePartners for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRemoteAssistancePartner);
        return requestInfo;
    };
    /**
     * The remote assist partners.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RemoteAssistancePartnerCollectionResponse
     */
    public get(requestConfiguration?: RemoteAssistancePartnersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RemoteAssistancePartnerCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RemoteAssistancePartnerCollectionResponse>(requestInfo,deserializeIntoRemoteAssistancePartnerCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to remoteAssistancePartners for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RemoteAssistancePartner
     */
    public post(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RemoteAssistancePartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RemoteAssistancePartner>(requestInfo,deserializeIntoRemoteAssistancePartner, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
