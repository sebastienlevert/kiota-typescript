import { InferenceClassificationRequestBuilder } from './inferenceClassification/inferenceClassificationRequestBuilder';
import { MailFolderRequestBuilder } from './mailFolders/item/mailFolderRequestBuilder';
import { MailFoldersRequestBuilder } from './mailFolders/mailFoldersRequestBuilder';
import { MessageRequestBuilder } from './messages/item/messageRequestBuilder';
import { MessagesRequestBuilder } from './messages/messagesRequestBuilder';
import { getPathParameters } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}  */
export class UserRequestBuilder {
    /**
     * Instantiates a new UserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    get inferenceClassification() {
        return new InferenceClassificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get mailFolders() {
        return new MailFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get messages() {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    mailFoldersById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("mailFolder_id", id);
        return new MailFolderRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.messages.item collection
     * @param id Unique identifier of the item
     * @returns a messageRequestBuilder
     */
    messagesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("message_id", id);
        return new MessageRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
//# sourceMappingURL=userRequestBuilder.js.map