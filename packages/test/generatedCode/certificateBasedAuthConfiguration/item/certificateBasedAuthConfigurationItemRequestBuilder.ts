import {CertificateBasedAuthConfiguration} from '../../models/certificateBasedAuthConfiguration';
import {deserializeIntoCertificateBasedAuthConfiguration} from '../../models/deserializeIntoCertificateBasedAuthConfiguration';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeCertificateBasedAuthConfiguration} from '../../models/serializeCertificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration} from './certificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration} from './certificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration';
import {CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration} from './certificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of certificateBasedAuthConfiguration entities. */
export class CertificateBasedAuthConfigurationItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new CertificateBasedAuthConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get entity from certificateBasedAuthConfiguration by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in certificateBasedAuthConfiguration
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: CertificateBasedAuthConfiguration | undefined, requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCertificateBasedAuthConfiguration);
        return requestInfo;
    };
    /**
     * Delete entity from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get entity from certificateBasedAuthConfiguration by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CertificateBasedAuthConfiguration
     */
    public get(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CertificateBasedAuthConfiguration>(requestInfo,deserializeIntoCertificateBasedAuthConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update entity in certificateBasedAuthConfiguration
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CertificateBasedAuthConfiguration
     */
    public patch(body: CertificateBasedAuthConfiguration | undefined, requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CertificateBasedAuthConfiguration>(requestInfo,deserializeIntoCertificateBasedAuthConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
