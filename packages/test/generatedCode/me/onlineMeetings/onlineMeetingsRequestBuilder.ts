import {deserializeIntoOnlineMeeting} from '../../models/deserializeIntoOnlineMeeting';
import {deserializeIntoOnlineMeetingCollectionResponse} from '../../models/deserializeIntoOnlineMeetingCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {OnlineMeeting} from '../../models/onlineMeeting';
import {OnlineMeetingCollectionResponse} from '../../models/onlineMeetingCollectionResponse';
import {serializeOnlineMeeting} from '../../models/serializeOnlineMeeting';
import {serializeOnlineMeetingCollectionResponse} from '../../models/serializeOnlineMeetingCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CreateOrGetRequestBuilder} from './createOrGet/createOrGetRequestBuilder';
import {OnlineMeetingsRequestBuilderGetRequestConfiguration} from './onlineMeetingsRequestBuilderGetRequestConfiguration';
import {OnlineMeetingsRequestBuilderPostRequestConfiguration} from './onlineMeetingsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the onlineMeetings property of the microsoft.graph.user entity. */
export class OnlineMeetingsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the createOrGet method. */
    public get createOrGet(): CreateOrGetRequestBuilder {
        return new CreateOrGetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OnlineMeetingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/onlineMeetings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report is an online meeting artifact. For details, see Online meeting artifacts and permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OnlineMeetingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an online meeting on behalf of a user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: OnlineMeeting | undefined, requestConfiguration?: OnlineMeetingsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOnlineMeeting);
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report is an online meeting artifact. For details, see Online meeting artifacts and permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnlineMeetingCollectionResponse
     */
    public get(requestConfiguration?: OnlineMeetingsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnlineMeetingCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnlineMeetingCollectionResponse>(requestInfo,deserializeIntoOnlineMeetingCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create an online meeting on behalf of a user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnlineMeeting
     */
    public post(body: OnlineMeeting | undefined, requestConfiguration?: OnlineMeetingsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnlineMeeting | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnlineMeeting>(requestInfo,deserializeIntoOnlineMeeting, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
