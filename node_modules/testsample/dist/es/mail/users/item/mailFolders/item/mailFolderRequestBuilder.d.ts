import { MailFolder } from '../../../../models/microsoft/graph/mailFolder';
import { ChildFoldersRequestBuilder } from './childFolders/childFoldersRequestBuilder';
import { MailFolderRequestBuilder as i1f71f40119b3c4b08560d123649c3756d49f76783481ef37bf160ee6b75bd90d } from './childFolders/item/mailFolderRequestBuilder';
import { MessageRuleRequestBuilder } from './messageRules/item/messageRuleRequestBuilder';
import { MessageRulesRequestBuilder } from './messageRules/messageRulesRequestBuilder';
import { MessageRequestBuilder } from './messages/item/messageRequestBuilder';
import { MessagesRequestBuilder } from './messages/messagesRequestBuilder';
import { MultiValueLegacyExtendedPropertyRequestBuilder } from './multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder';
import { MultiValueExtendedPropertiesRequestBuilder } from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import { SingleValueLegacyExtendedPropertyRequestBuilder } from './singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder';
import { SingleValueExtendedPropertiesRequestBuilder } from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}  */
export declare class MailFolderRequestBuilder {
    get childFolders(): ChildFoldersRequestBuilder;
    get messageRules(): MessageRulesRequestBuilder;
    get messages(): MessagesRequestBuilder;
    get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder;
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.childFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    childFoldersById(id: string): i1f71f40119b3c4b08560d123649c3756d49f76783481ef37bf160ee6b75bd90d;
    /**
     * Instantiates a new MailFolderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    get(q?: {
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MailFolder | undefined>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messageRules.item collection
     * @param id Unique identifier of the item
     * @returns a messageRuleRequestBuilder
     */
    messageRulesById(id: string): MessageRuleRequestBuilder;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item collection
     * @param id Unique identifier of the item
     * @returns a messageRequestBuilder
     */
    messagesById(id: string): MessageRequestBuilder;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyRequestBuilder
     */
    multiValueExtendedPropertiesById(id: string): MultiValueLegacyExtendedPropertyRequestBuilder;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body: MailFolder | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyRequestBuilder
     */
    singleValueExtendedPropertiesById(id: string): SingleValueLegacyExtendedPropertyRequestBuilder;
}
//# sourceMappingURL=mailFolderRequestBuilder.d.ts.map