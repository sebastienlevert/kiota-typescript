import {deserializeIntoThreatAssessmentRequest} from '../../models/deserializeIntoThreatAssessmentRequest';
import {deserializeIntoThreatAssessmentRequestCollectionResponse} from '../../models/deserializeIntoThreatAssessmentRequestCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeThreatAssessmentRequest} from '../../models/serializeThreatAssessmentRequest';
import {serializeThreatAssessmentRequestCollectionResponse} from '../../models/serializeThreatAssessmentRequestCollectionResponse';
import {ThreatAssessmentRequest} from '../../models/threatAssessmentRequest';
import {ThreatAssessmentRequestCollectionResponse} from '../../models/threatAssessmentRequestCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration} from './threatAssessmentRequestsRequestBuilderGetRequestConfiguration';
import {ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration} from './threatAssessmentRequestsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the threatAssessmentRequests property of the microsoft.graph.informationProtection entity. */
export class ThreatAssessmentRequestsRequestBuilder {
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
     * Instantiates a new ThreatAssessmentRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/informationProtection/threatAssessmentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new threat assessment request. A threat assessment request can be one of the following types:
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ThreatAssessmentRequest | undefined, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeThreatAssessmentRequest);
        return requestInfo;
    };
    /**
     * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThreatAssessmentRequestCollectionResponse
     */
    public get(requestConfiguration?: ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThreatAssessmentRequestCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ThreatAssessmentRequestCollectionResponse>(requestInfo,deserializeIntoThreatAssessmentRequestCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new threat assessment request. A threat assessment request can be one of the following types:
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThreatAssessmentRequest
     */
    public post(body: ThreatAssessmentRequest | undefined, requestConfiguration?: ThreatAssessmentRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThreatAssessmentRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ThreatAssessmentRequest>(requestInfo,deserializeIntoThreatAssessmentRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
