import { Importance } from './importance';
import { Recipient } from './recipient';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MessageRuleActions implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** A list of categories to be assigned to a message.  */
    private _assignCategories?;
    /** The ID of a folder that a message is to be copied to.  */
    private _copyToFolder?;
    /** Indicates whether a message should be moved to the Deleted Items folder.  */
    private _delete?;
    /** The email addresses of the recipients to which a message should be forwarded as an attachment.  */
    private _forwardAsAttachmentTo?;
    /** The email addresses of the recipients to which a message should be forwarded.  */
    private _forwardTo?;
    /** Indicates whether a message should be marked as read.  */
    private _markAsRead?;
    private _markImportance?;
    /** The ID of the folder that a message will be moved to.  */
    private _moveToFolder?;
    /** Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.  */
    private _permanentDelete?;
    /** The email addresses to which a message should be redirected.  */
    private _redirectTo?;
    /** Indicates whether subsequent rules should be evaluated.  */
    private _stopProcessingRules?;
    /**
     * Instantiates a new messageRuleActions and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the assignCategories property value. A list of categories to be assigned to a message.
     * @returns a string
     */
    get assignCategories(): string[] | undefined;
    /**
     * Gets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @returns a string
     */
    get copyToFolder(): string | undefined;
    /**
     * Gets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @returns a boolean
     */
    get delete(): boolean | undefined;
    /**
     * Gets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @returns a recipient
     */
    get forwardAsAttachmentTo(): Recipient[] | undefined;
    /**
     * Gets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @returns a recipient
     */
    get forwardTo(): Recipient[] | undefined;
    /**
     * Gets the markAsRead property value. Indicates whether a message should be marked as read.
     * @returns a boolean
     */
    get markAsRead(): boolean | undefined;
    /**
     * Gets the markImportance property value.
     * @returns a importance
     */
    get markImportance(): Importance | undefined;
    /**
     * Gets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @returns a string
     */
    get moveToFolder(): string | undefined;
    /**
     * Gets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @returns a boolean
     */
    get permanentDelete(): boolean | undefined;
    /**
     * Gets the redirectTo property value. The email addresses to which a message should be redirected.
     * @returns a recipient
     */
    get redirectTo(): Recipient[] | undefined;
    /**
     * Gets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @returns a boolean
     */
    get stopProcessingRules(): boolean | undefined;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers<T>(): Map<string, (item: T, node: ParseNode) => void>;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer: SerializationWriter): void;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value: Map<string, unknown>);
    /**
     * Sets the assignCategories property value. A list of categories to be assigned to a message.
     * @param value Value to set for the assignCategories property.
     */
    set assignCategories(value: string[] | undefined);
    /**
     * Sets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @param value Value to set for the copyToFolder property.
     */
    set copyToFolder(value: string | undefined);
    /**
     * Sets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @param value Value to set for the delete property.
     */
    set delete(value: boolean | undefined);
    /**
     * Sets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @param value Value to set for the forwardAsAttachmentTo property.
     */
    set forwardAsAttachmentTo(value: Recipient[] | undefined);
    /**
     * Sets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @param value Value to set for the forwardTo property.
     */
    set forwardTo(value: Recipient[] | undefined);
    /**
     * Sets the markAsRead property value. Indicates whether a message should be marked as read.
     * @param value Value to set for the markAsRead property.
     */
    set markAsRead(value: boolean | undefined);
    /**
     * Sets the markImportance property value.
     * @param value Value to set for the markImportance property.
     */
    set markImportance(value: Importance | undefined);
    /**
     * Sets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @param value Value to set for the moveToFolder property.
     */
    set moveToFolder(value: string | undefined);
    /**
     * Sets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @param value Value to set for the permanentDelete property.
     */
    set permanentDelete(value: boolean | undefined);
    /**
     * Sets the redirectTo property value. The email addresses to which a message should be redirected.
     * @param value Value to set for the redirectTo property.
     */
    set redirectTo(value: Recipient[] | undefined);
    /**
     * Sets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @param value Value to set for the stopProcessingRules property.
     */
    set stopProcessingRules(value: boolean | undefined);
}
//# sourceMappingURL=messageRuleActions.d.ts.map