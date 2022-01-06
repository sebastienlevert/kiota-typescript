"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestBuilder = void 0;
const inferenceClassificationRequestBuilder_1 = require("./inferenceClassification/inferenceClassificationRequestBuilder");
const mailFolderRequestBuilder_1 = require("./mailFolders/item/mailFolderRequestBuilder");
const mailFoldersRequestBuilder_1 = require("./mailFolders/mailFoldersRequestBuilder");
const messageRequestBuilder_1 = require("./messages/item/messageRequestBuilder");
const messagesRequestBuilder_1 = require("./messages/messagesRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}  */
class UserRequestBuilder {
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
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    get inferenceClassification() {
        return new inferenceClassificationRequestBuilder_1.InferenceClassificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get mailFolders() {
        return new mailFoldersRequestBuilder_1.MailFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get messages() {
        return new messagesRequestBuilder_1.MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
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
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("mailFolder_id", id);
        return new mailFolderRequestBuilder_1.MailFolderRequestBuilder(urlTplParams, this.requestAdapter);
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
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("message_id", id);
        return new messageRequestBuilder_1.MessageRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
exports.UserRequestBuilder = UserRequestBuilder;
//# sourceMappingURL=userRequestBuilder.js.map