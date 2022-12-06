import {CertificateBasedAuthConfiguration} from '../models/certificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationCollectionResponse} from '../models/certificateBasedAuthConfigurationCollectionResponse';
import {deserializeIntoCertificateBasedAuthConfiguration} from '../models/deserializeIntoCertificateBasedAuthConfiguration';
import {deserializeIntoCertificateBasedAuthConfigurationCollectionResponse} from '../models/deserializeIntoCertificateBasedAuthConfigurationCollectionResponse';
import {ODataError} from '../models/oDataErrors/oDataError';
import {serializeCertificateBasedAuthConfiguration} from '../models/serializeCertificateBasedAuthConfiguration';
import {serializeCertificateBasedAuthConfigurationCollectionResponse} from '../models/serializeCertificateBasedAuthConfigurationCollectionResponse';
import {CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration';
import {CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of certificateBasedAuthConfiguration entities. */
export class CertificateBasedAuthConfigurationRequestBuilder {
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
     * Instantiates a new CertificateBasedAuthConfigurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/certificateBasedAuthConfiguration{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get entities from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to certificateBasedAuthConfiguration
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: CertificateBasedAuthConfiguration | undefined, requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCertificateBasedAuthConfiguration);
        return requestInfo;
    };
    /**
     * Get entities from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CertificateBasedAuthConfigurationCollectionResponse
     */
    public get(requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CertificateBasedAuthConfigurationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CertificateBasedAuthConfigurationCollectionResponse>(requestInfo,deserializeIntoCertificateBasedAuthConfigurationCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add new entity to certificateBasedAuthConfiguration
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CertificateBasedAuthConfiguration
     */
    public post(body: CertificateBasedAuthConfiguration | undefined, requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CertificateBasedAuthConfiguration>(requestInfo,deserializeIntoCertificateBasedAuthConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
