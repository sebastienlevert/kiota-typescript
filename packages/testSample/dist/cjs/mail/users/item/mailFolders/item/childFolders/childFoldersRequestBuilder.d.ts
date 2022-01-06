import { MailFolder } from '../../../../../models/microsoft/graph/mailFolder';
import { ChildFoldersResponse } from './childFoldersResponse';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders  */
export declare class ChildFoldersRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new ChildFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        count?: boolean;
        expand?: string[];
        filter?: string;
        orderby?: string[];
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of child folders in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPostRequestInformation(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ChildFoldersResponse
     */
    get(q?: {
        count?: boolean;
        expand?: string[];
        filter?: string;
        orderby?: string[];
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<ChildFoldersResponse | undefined>;
    /**
     * The collection of child folders in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    post(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MailFolder | undefined>;
}
//# sourceMappingURL=childFoldersRequestBuilder.d.ts.map