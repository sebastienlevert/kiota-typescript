import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
import { ReadableStream } from 'web-streams-polyfill/es2018';
/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/$value  */
export declare class ContentRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new ContentRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * Get media content for the navigation property messages from users
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createGetRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * Update media content for the navigation property messages in users
     * @param body Binary request body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPutRequestInformation(body: ReadableStream, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * Get media content for the navigation property messages from users
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReadableStream
     */
    get(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<ReadableStream | undefined>;
    /**
     * Update media content for the navigation property messages in users
     * @param body Binary request body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    put(body: ReadableStream, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
}
//# sourceMappingURL=contentRequestBuilder.d.ts.map