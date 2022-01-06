"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRequestBuilder = void 0;
const message_1 = require("../../../../../../models/microsoft/graph/message");
const attachmentsRequestBuilder_1 = require("./attachments/attachmentsRequestBuilder");
const attachmentRequestBuilder_1 = require("./attachments/item/attachmentRequestBuilder");
const extensionsRequestBuilder_1 = require("./extensions/extensionsRequestBuilder");
const extensionRequestBuilder_1 = require("./extensions/item/extensionRequestBuilder");
const multiValueLegacyExtendedPropertyRequestBuilder_1 = require("./multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder");
const multiValueExtendedPropertiesRequestBuilder_1 = require("./multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder");
const singleValueLegacyExtendedPropertyRequestBuilder_1 = require("./singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder");
const singleValueExtendedPropertiesRequestBuilder_1 = require("./singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder");
const contentRequestBuilder_1 = require("./value/contentRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}  */
class MessageRequestBuilder {
    /**
     * Instantiates a new MessageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/mailFolders/{mailFolder_id}/messages/{message_id}{?select,expand}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    get attachments() {
        return new attachmentsRequestBuilder_1.AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get content() {
        return new contentRequestBuilder_1.ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get extensions() {
        return new extensionsRequestBuilder_1.ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get multiValueExtendedProperties() {
        return new multiValueExtendedPropertiesRequestBuilder_1.MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get singleValueExtendedProperties() {
        return new singleValueExtendedPropertiesRequestBuilder_1.SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.attachments.item collection
     * @param id Unique identifier of the item
     * @returns a attachmentRequestBuilder
     */
    attachmentsById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("attachment_id", id);
        return new attachmentRequestBuilder_1.AttachmentRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h, o) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q, h, o) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    extensionsById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("extension_id", id);
        return new extensionRequestBuilder_1.ExtensionRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Message
     */
    get(q, h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(q, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, message_1.Message, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyRequestBuilder
     */
    multiValueExtendedPropertiesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("multiValueLegacyExtendedProperty_id", id);
        return new multiValueLegacyExtendedPropertyRequestBuilder_1.MultiValueLegacyExtendedPropertyRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(body, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyRequestBuilder
     */
    singleValueExtendedPropertiesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("singleValueLegacyExtendedProperty_id", id);
        return new singleValueLegacyExtendedPropertyRequestBuilder_1.SingleValueLegacyExtendedPropertyRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
exports.MessageRequestBuilder = MessageRequestBuilder;
//# sourceMappingURL=messageRequestBuilder.js.map