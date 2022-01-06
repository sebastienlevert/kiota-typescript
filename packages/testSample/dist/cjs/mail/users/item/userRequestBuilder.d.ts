import { InferenceClassificationRequestBuilder } from './inferenceClassification/inferenceClassificationRequestBuilder';
import { MailFolderRequestBuilder } from './mailFolders/item/mailFolderRequestBuilder';
import { MailFoldersRequestBuilder } from './mailFolders/mailFoldersRequestBuilder';
import { MessageRequestBuilder } from './messages/item/messageRequestBuilder';
import { MessagesRequestBuilder } from './messages/messagesRequestBuilder';
import { RequestAdapter } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}  */
export declare class UserRequestBuilder {
    get inferenceClassification(): InferenceClassificationRequestBuilder;
    get mailFolders(): MailFoldersRequestBuilder;
    get messages(): MessagesRequestBuilder;
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new UserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    mailFoldersById(id: string): MailFolderRequestBuilder;
    /**
     * Gets an item from the MicrosoftGraph.users.item.messages.item collection
     * @param id Unique identifier of the item
     * @returns a messageRequestBuilder
     */
    messagesById(id: string): MessageRequestBuilder;
}
//# sourceMappingURL=userRequestBuilder.d.ts.map