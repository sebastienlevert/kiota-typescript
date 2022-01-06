"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailFolderRequestBuilder = void 0;
const mailFolder_1 = require("../../../../models/microsoft/graph/mailFolder");
const childFoldersRequestBuilder_1 = require("./childFolders/childFoldersRequestBuilder");
const mailFolderRequestBuilder_1 = require("./childFolders/item/mailFolderRequestBuilder");
const messageRuleRequestBuilder_1 = require("./messageRules/item/messageRuleRequestBuilder");
const messageRulesRequestBuilder_1 = require("./messageRules/messageRulesRequestBuilder");
const messageRequestBuilder_1 = require("./messages/item/messageRequestBuilder");
const messagesRequestBuilder_1 = require("./messages/messagesRequestBuilder");
const multiValueLegacyExtendedPropertyRequestBuilder_1 = require("./multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder");
const multiValueExtendedPropertiesRequestBuilder_1 = require("./multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder");
const singleValueLegacyExtendedPropertyRequestBuilder_1 = require("./singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder");
const singleValueExtendedPropertiesRequestBuilder_1 = require("./singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}  */
class MailFolderRequestBuilder {
    /**
     * Instantiates a new MailFolderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/mailFolders/{mailFolder_id}{?select}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    get childFolders() {
        return new childFoldersRequestBuilder_1.ChildFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get messageRules() {
        return new messageRulesRequestBuilder_1.MessageRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get messages() {
        return new messagesRequestBuilder_1.MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get multiValueExtendedProperties() {
        return new multiValueExtendedPropertiesRequestBuilder_1.MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    get singleValueExtendedProperties() {
        return new singleValueExtendedPropertiesRequestBuilder_1.SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.childFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    childFoldersById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("mailFolder_id1", id);
        return new mailFolderRequestBuilder_1.MailFolderRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    ;
    /**
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
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
     * The user's mail folders. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    get(q, h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(q, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, mailFolder_1.MailFolder, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messageRules.item collection
     * @param id Unique identifier of the item
     * @returns a messageRuleRequestBuilder
     */
    messageRulesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("messageRule_id", id);
        return new messageRuleRequestBuilder_1.MessageRuleRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item collection
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
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.multiValueExtendedProperties.item collection
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
     * The user's mail folders. Read-only. Nullable.
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
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.singleValueExtendedProperties.item collection
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
exports.MailFolderRequestBuilder = MailFolderRequestBuilder;
//# sourceMappingURL=mailFolderRequestBuilder.js.map