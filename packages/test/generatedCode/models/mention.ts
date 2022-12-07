import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {EmailAddress, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mention extends Entity implements Parsable {
    /** The name of the application where the mention is created. Optional. Not used and defaulted as null for message. */
    private _application?: string | undefined;
    /** A unique identifier that represents a parent of the resource instance. Optional. Not used and defaulted as null for message. */
    private _clientReference?: string | undefined;
    /** The createdBy property */
    private _createdBy?: EmailAddress | undefined;
    /** The date and time that the mention is created on the client. */
    private _createdDateTime?: Date | undefined;
    /** A deep web link to the context of the mention in the resource instance. Optional. Not used and defaulted as null for message. */
    private _deepLink?: string | undefined;
    /** The mentioned property */
    private _mentioned?: EmailAddress | undefined;
    /** Optional. Not used and defaulted as null for message. To get the mentions in a message, see the bodyPreview property of the message instead. */
    private _mentionText?: string | undefined;
    /** The date and time that the mention is created on the server. Optional. Not used and defaulted as null for message. */
    private _serverCreatedDateTime?: Date | undefined;
    /**
     * Gets the application property value. The name of the application where the mention is created. Optional. Not used and defaulted as null for message.
     * @returns a string
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The name of the application where the mention is created. Optional. Not used and defaulted as null for message.
     * @param value Value to set for the application property.
     */
    public set application(value: string | undefined) {
        this._application = value;
    };
    /**
     * Gets the clientReference property value. A unique identifier that represents a parent of the resource instance. Optional. Not used and defaulted as null for message.
     * @returns a string
     */
    public get clientReference() {
        return this._clientReference;
    };
    /**
     * Sets the clientReference property value. A unique identifier that represents a parent of the resource instance. Optional. Not used and defaulted as null for message.
     * @param value Value to set for the clientReference property.
     */
    public set clientReference(value: string | undefined) {
        this._clientReference = value;
    };
    /**
     * Instantiates a new mention and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a emailAddress
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: EmailAddress | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time that the mention is created on the client.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time that the mention is created on the client.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deepLink property value. A deep web link to the context of the mention in the resource instance. Optional. Not used and defaulted as null for message.
     * @returns a string
     */
    public get deepLink() {
        return this._deepLink;
    };
    /**
     * Sets the deepLink property value. A deep web link to the context of the mention in the resource instance. Optional. Not used and defaulted as null for message.
     * @param value Value to set for the deepLink property.
     */
    public set deepLink(value: string | undefined) {
        this._deepLink = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "application": n => { this.application = n.getStringValue(); },
            "clientReference": n => { this.clientReference = n.getStringValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deepLink": n => { this.deepLink = n.getStringValue(); },
            "mentioned": n => { this.mentioned = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
            "mentionText": n => { this.mentionText = n.getStringValue(); },
            "serverCreatedDateTime": n => { this.serverCreatedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the mentioned property value. The mentioned property
     * @returns a emailAddress
     */
    public get mentioned() {
        return this._mentioned;
    };
    /**
     * Sets the mentioned property value. The mentioned property
     * @param value Value to set for the mentioned property.
     */
    public set mentioned(value: EmailAddress | undefined) {
        this._mentioned = value;
    };
    /**
     * Gets the mentionText property value. Optional. Not used and defaulted as null for message. To get the mentions in a message, see the bodyPreview property of the message instead.
     * @returns a string
     */
    public get mentionText() {
        return this._mentionText;
    };
    /**
     * Sets the mentionText property value. Optional. Not used and defaulted as null for message. To get the mentions in a message, see the bodyPreview property of the message instead.
     * @param value Value to set for the mentionText property.
     */
    public set mentionText(value: string | undefined) {
        this._mentionText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("application", this.application);
        writer.writeStringValue("clientReference", this.clientReference);
        writer.writeObjectValue<EmailAddress>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("deepLink", this.deepLink);
        writer.writeObjectValue<EmailAddress>("mentioned", this.mentioned);
        writer.writeStringValue("mentionText", this.mentionText);
        writer.writeDateValue("serverCreatedDateTime", this.serverCreatedDateTime);
    };
    /**
     * Gets the serverCreatedDateTime property value. The date and time that the mention is created on the server. Optional. Not used and defaulted as null for message.
     * @returns a Date
     */
    public get serverCreatedDateTime() {
        return this._serverCreatedDateTime;
    };
    /**
     * Sets the serverCreatedDateTime property value. The date and time that the mention is created on the server. Optional. Not used and defaulted as null for message.
     * @param value Value to set for the serverCreatedDateTime property.
     */
    public set serverCreatedDateTime(value: Date | undefined) {
        this._serverCreatedDateTime = value;
    };
}
