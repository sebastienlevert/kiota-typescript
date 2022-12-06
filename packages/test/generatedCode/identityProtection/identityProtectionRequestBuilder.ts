import {deserializeIntoIdentityProtectionRoot} from '../models/deserializeIntoIdentityProtectionRoot';
import {IdentityProtectionRoot} from '../models/identityProtectionRoot';
import {ODataError} from '../models/oDataErrors/oDataError';
import {serializeIdentityProtectionRoot} from '../models/serializeIdentityProtectionRoot';
import {IdentityProtectionRequestBuilderGetRequestConfiguration} from './identityProtectionRequestBuilderGetRequestConfiguration';
import {IdentityProtectionRequestBuilderPatchRequestConfiguration} from './identityProtectionRequestBuilderPatchRequestConfiguration';
import {RiskDetectionItemRequestBuilder} from './riskDetections/item/riskDetectionItemRequestBuilder';
import {RiskDetectionsRequestBuilder} from './riskDetections/riskDetectionsRequestBuilder';
import {RiskyUserItemRequestBuilder} from './riskyUsers/item/riskyUserItemRequestBuilder';
import {RiskyUsersRequestBuilder} from './riskyUsers/riskyUsersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityProtectionRoot singleton. */
export class IdentityProtectionRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the riskDetections property of the microsoft.graph.identityProtectionRoot entity. */
    public get riskDetections(): RiskDetectionsRequestBuilder {
        return new RiskDetectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the riskyUsers property of the microsoft.graph.identityProtectionRoot entity. */
    public get riskyUsers(): RiskyUsersRequestBuilder {
        return new RiskyUsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new IdentityProtectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityProtection{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: IdentityProtectionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update identityProtection
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: IdentityProtectionRoot | undefined, requestConfiguration?: IdentityProtectionRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityProtectionRoot);
        return requestInfo;
    };
    /**
     * Get identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProtectionRoot
     */
    public get(requestConfiguration?: IdentityProtectionRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProtectionRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityProtectionRoot>(requestInfo,deserializeIntoIdentityProtectionRoot, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update identityProtection
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProtectionRoot
     */
    public patch(body: IdentityProtectionRoot | undefined, requestConfiguration?: IdentityProtectionRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProtectionRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityProtectionRoot>(requestInfo,deserializeIntoIdentityProtectionRoot, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the riskDetections property of the microsoft.graph.identityProtectionRoot entity.
     * @param id Unique identifier of the item
     * @returns a RiskDetectionItemRequestBuilder
     */
    public riskDetectionsById(id: string) : RiskDetectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskDetection%2Did"] = id
        return new RiskDetectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the riskyUsers property of the microsoft.graph.identityProtectionRoot entity.
     * @param id Unique identifier of the item
     * @returns a RiskyUserItemRequestBuilder
     */
    public riskyUsersById(id: string) : RiskyUserItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskyUser%2Did"] = id
        return new RiskyUserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
