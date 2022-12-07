import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CommentAction implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If true, this activity was a reply to an existing comment thread. */
    private _isReply?: boolean | undefined;
    /** The parentAuthor property */
    private _parentAuthor?: IdentitySet | undefined;
    /** The identities of the users participating in this comment thread. */
    private _participants?: IdentitySet[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new commentAction and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isReply": n => { this.isReply = n.getBooleanValue(); },
            "parentAuthor": n => { this.parentAuthor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isReply property value. If true, this activity was a reply to an existing comment thread.
     * @returns a boolean
     */
    public get isReply() {
        return this._isReply;
    };
    /**
     * Sets the isReply property value. If true, this activity was a reply to an existing comment thread.
     * @param value Value to set for the isReply property.
     */
    public set isReply(value: boolean | undefined) {
        this._isReply = value;
    };
    /**
     * Gets the parentAuthor property value. The parentAuthor property
     * @returns a identitySet
     */
    public get parentAuthor() {
        return this._parentAuthor;
    };
    /**
     * Sets the parentAuthor property value. The parentAuthor property
     * @param value Value to set for the parentAuthor property.
     */
    public set parentAuthor(value: IdentitySet | undefined) {
        this._parentAuthor = value;
    };
    /**
     * Gets the participants property value. The identities of the users participating in this comment thread.
     * @returns a identitySet
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The identities of the users participating in this comment thread.
     * @param value Value to set for the participants property.
     */
    public set participants(value: IdentitySet[] | undefined) {
        this._participants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isReply", this.isReply);
        writer.writeObjectValue<IdentitySet>("parentAuthor", this.parentAuthor);
        writer.writeCollectionOfObjectValues<IdentitySet>("participants", this.participants);
        writer.writeAdditionalData(this.additionalData);
    };
}
