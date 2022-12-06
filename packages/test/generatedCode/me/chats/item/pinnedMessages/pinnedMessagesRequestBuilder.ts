import {deserializeIntoPinnedChatMessageInfo} from '../../../../models/deserializeIntoPinnedChatMessageInfo';
import {deserializeIntoPinnedChatMessageInfoCollectionResponse} from '../../../../models/deserializeIntoPinnedChatMessageInfoCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {PinnedChatMessageInfo} from '../../../../models/pinnedChatMessageInfo';
import {PinnedChatMessageInfoCollectionResponse} from '../../../../models/pinnedChatMessageInfoCollectionResponse';
import {serializePinnedChatMessageInfo} from '../../../../models/serializePinnedChatMessageInfo';
import {serializePinnedChatMessageInfoCollectionResponse} from '../../../../models/serializePinnedChatMessageInfoCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PinnedMessagesRequestBuilderGetRequestConfiguration} from './pinnedMessagesRequestBuilderGetRequestConfiguration';
import {PinnedMessagesRequestBuilderPostRequestConfiguration} from './pinnedMessagesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity. */
export class PinnedMessagesRequestBuilder {
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
     * Instantiates a new PinnedMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/chats/{chat%2Did}/pinnedMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of pinnedChatMessages in a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: PinnedChatMessageInfo | undefined, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePinnedChatMessageInfo);
        return requestInfo;
    };
    /**
     * Get a list of pinnedChatMessages in a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PinnedChatMessageInfoCollectionResponse
     */
    public get(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PinnedChatMessageInfoCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PinnedChatMessageInfoCollectionResponse>(requestInfo,deserializeIntoPinnedChatMessageInfoCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PinnedChatMessageInfo
     */
    public post(body: PinnedChatMessageInfo | undefined, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PinnedChatMessageInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PinnedChatMessageInfo>(requestInfo,deserializeIntoPinnedChatMessageInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
