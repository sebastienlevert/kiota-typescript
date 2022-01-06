import { Message } from '../../../../../../models/microsoft/graph/message';
import { AttachmentsRequestBuilder } from './attachments/attachmentsRequestBuilder';
import { AttachmentRequestBuilder } from './attachments/item/attachmentRequestBuilder';
import { ExtensionsRequestBuilder } from './extensions/extensionsRequestBuilder';
import { ExtensionRequestBuilder } from './extensions/item/extensionRequestBuilder';
import { MultiValueLegacyExtendedPropertyRequestBuilder } from './multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyRequestBuilder';
import { MultiValueExtendedPropertiesRequestBuilder } from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import { SingleValueLegacyExtendedPropertyRequestBuilder } from './singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyRequestBuilder';
import { SingleValueExtendedPropertiesRequestBuilder } from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import { ContentRequestBuilder } from './value/contentRequestBuilder';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}  */
export declare class MessageRequestBuilder {
    get attachments(): AttachmentsRequestBuilder;
    get content(): ContentRequestBuilder;
    get extensions(): ExtensionsRequestBuilder;
    get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder;
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.attachments.item collection
     * @param id Unique identifier of the item
     * @returns a attachmentRequestBuilder
     */
    attachmentsById(id: string): AttachmentRequestBuilder;
    /**
     * Instantiates a new MessageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of messages in the mailFolder.
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
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body: Message | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    extensionsById(id: string): ExtensionRequestBuilder;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Message
     */
    get(q?: {
        expand?: string[];
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<Message | undefined>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyRequestBuilder
     */
    multiValueExtendedPropertiesById(id: string): MultiValueLegacyExtendedPropertyRequestBuilder;
    /**
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body: Message | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item.messages.item.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyRequestBuilder
     */
    singleValueExtendedPropertiesById(id: string): SingleValueLegacyExtendedPropertyRequestBuilder;
}
//# sourceMappingURL=messageRequestBuilder.d.ts.map