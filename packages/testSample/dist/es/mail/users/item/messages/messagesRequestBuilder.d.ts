import { Message } from '../../../models/microsoft/graph/message';
import { MessagesResponse } from './messagesResponse';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/messages  */
export declare class MessagesRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        count?: boolean;
        filter?: string;
        orderby?: string[];
        search?: string;
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPostRequestInformation(body: Message | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessagesResponse
     */
    get(q?: {
        count?: boolean;
        filter?: string;
        orderby?: string[];
        search?: string;
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MessagesResponse | undefined>;
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Message
     */
    post(body: Message | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<Message | undefined>;
}
//# sourceMappingURL=messagesRequestBuilder.d.ts.map