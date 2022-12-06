import {AudioRoutingGroup} from '../../../../models/audioRoutingGroup';
import {AudioRoutingGroupCollectionResponse} from '../../../../models/audioRoutingGroupCollectionResponse';
import {deserializeIntoAudioRoutingGroup} from '../../../../models/deserializeIntoAudioRoutingGroup';
import {deserializeIntoAudioRoutingGroupCollectionResponse} from '../../../../models/deserializeIntoAudioRoutingGroupCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeAudioRoutingGroup} from '../../../../models/serializeAudioRoutingGroup';
import {serializeAudioRoutingGroupCollectionResponse} from '../../../../models/serializeAudioRoutingGroupCollectionResponse';
import {AudioRoutingGroupsRequestBuilderGetRequestConfiguration} from './audioRoutingGroupsRequestBuilderGetRequestConfiguration';
import {AudioRoutingGroupsRequestBuilderPostRequestConfiguration} from './audioRoutingGroupsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity. */
export class AudioRoutingGroupsRequestBuilder {
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
     * Instantiates a new AudioRoutingGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/calls/{call%2Did}/audioRoutingGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get audioRoutingGroups from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AudioRoutingGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to audioRoutingGroups for communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AudioRoutingGroup | undefined, requestConfiguration?: AudioRoutingGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAudioRoutingGroup);
        return requestInfo;
    };
    /**
     * Get audioRoutingGroups from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AudioRoutingGroupCollectionResponse
     */
    public get(requestConfiguration?: AudioRoutingGroupsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AudioRoutingGroupCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AudioRoutingGroupCollectionResponse>(requestInfo,deserializeIntoAudioRoutingGroupCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to audioRoutingGroups for communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AudioRoutingGroup
     */
    public post(body: AudioRoutingGroup | undefined, requestConfiguration?: AudioRoutingGroupsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AudioRoutingGroup | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AudioRoutingGroup>(requestInfo,deserializeIntoAudioRoutingGroup, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
