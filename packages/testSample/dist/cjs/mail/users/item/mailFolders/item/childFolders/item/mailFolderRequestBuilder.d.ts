import { MailFolder } from '../../../../../../models/microsoft/graph/mailFolder';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}  */
export declare class MailFolderRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new MailFolderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        expand?: string[];
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of child folders in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * The collection of child folders in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    get(q?: {
        expand?: string[];
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MailFolder | undefined>;
    /**
     * The collection of child folders in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
}
//# sourceMappingURL=mailFolderRequestBuilder.d.ts.map