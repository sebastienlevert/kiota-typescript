import {deserializeIntoOpenShiftChangeRequest} from '../../../../../models/deserializeIntoOpenShiftChangeRequest';
import {deserializeIntoOpenShiftChangeRequestCollectionResponse} from '../../../../../models/deserializeIntoOpenShiftChangeRequestCollectionResponse';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {OpenShiftChangeRequest} from '../../../../../models/openShiftChangeRequest';
import {OpenShiftChangeRequestCollectionResponse} from '../../../../../models/openShiftChangeRequestCollectionResponse';
import {serializeOpenShiftChangeRequest} from '../../../../../models/serializeOpenShiftChangeRequest';
import {serializeOpenShiftChangeRequestCollectionResponse} from '../../../../../models/serializeOpenShiftChangeRequestCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration} from './openShiftChangeRequestsRequestBuilderGetRequestConfiguration';
import {OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration} from './openShiftChangeRequestsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity. */
export class OpenShiftChangeRequestsRequestBuilder {
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
     * Instantiates a new OpenShiftChangeRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/team/schedule/openShiftChangeRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of openShiftChangeRequest objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create instance of an openShiftChangeRequest object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: OpenShiftChangeRequest | undefined, requestConfiguration?: OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOpenShiftChangeRequest);
        return requestInfo;
    };
    /**
     * Retrieve a list of openShiftChangeRequest objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OpenShiftChangeRequestCollectionResponse
     */
    public get(requestConfiguration?: OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OpenShiftChangeRequestCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OpenShiftChangeRequestCollectionResponse>(requestInfo,deserializeIntoOpenShiftChangeRequestCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create instance of an openShiftChangeRequest object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OpenShiftChangeRequest
     */
    public post(body: OpenShiftChangeRequest | undefined, requestConfiguration?: OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OpenShiftChangeRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OpenShiftChangeRequest>(requestInfo,deserializeIntoOpenShiftChangeRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
