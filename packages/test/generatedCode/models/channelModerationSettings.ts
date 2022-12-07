import {ReplyRestriction} from './replyRestriction';
import {UserNewMessageRestriction} from './userNewMessageRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelModerationSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether bots are allowed to post messages. */
    private _allowNewMessageFromBots?: boolean | undefined;
    /** Indicates whether connectors are allowed to post messages. */
    private _allowNewMessageFromConnectors?: boolean | undefined;
    /** The replyRestriction property */
    private _replyRestriction?: ReplyRestriction | undefined;
    /** The userNewMessageRestriction property */
    private _userNewMessageRestriction?: UserNewMessageRestriction | undefined;
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
     * Gets the allowNewMessageFromBots property value. Indicates whether bots are allowed to post messages.
     * @returns a boolean
     */
    public get allowNewMessageFromBots() {
        return this._allowNewMessageFromBots;
    };
    /**
     * Sets the allowNewMessageFromBots property value. Indicates whether bots are allowed to post messages.
     * @param value Value to set for the allowNewMessageFromBots property.
     */
    public set allowNewMessageFromBots(value: boolean | undefined) {
        this._allowNewMessageFromBots = value;
    };
    /**
     * Gets the allowNewMessageFromConnectors property value. Indicates whether connectors are allowed to post messages.
     * @returns a boolean
     */
    public get allowNewMessageFromConnectors() {
        return this._allowNewMessageFromConnectors;
    };
    /**
     * Sets the allowNewMessageFromConnectors property value. Indicates whether connectors are allowed to post messages.
     * @param value Value to set for the allowNewMessageFromConnectors property.
     */
    public set allowNewMessageFromConnectors(value: boolean | undefined) {
        this._allowNewMessageFromConnectors = value;
    };
    /**
     * Instantiates a new channelModerationSettings and sets the default values.
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
            "allowNewMessageFromBots": n => { this.allowNewMessageFromBots = n.getBooleanValue(); },
            "allowNewMessageFromConnectors": n => { this.allowNewMessageFromConnectors = n.getBooleanValue(); },
            "replyRestriction": n => { this.replyRestriction = n.getEnumValue<ReplyRestriction>(ReplyRestriction); },
            "userNewMessageRestriction": n => { this.userNewMessageRestriction = n.getEnumValue<UserNewMessageRestriction>(UserNewMessageRestriction); },
        };
    };
    /**
     * Gets the replyRestriction property value. The replyRestriction property
     * @returns a replyRestriction
     */
    public get replyRestriction() {
        return this._replyRestriction;
    };
    /**
     * Sets the replyRestriction property value. The replyRestriction property
     * @param value Value to set for the replyRestriction property.
     */
    public set replyRestriction(value: ReplyRestriction | undefined) {
        this._replyRestriction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowNewMessageFromBots", this.allowNewMessageFromBots);
        writer.writeBooleanValue("allowNewMessageFromConnectors", this.allowNewMessageFromConnectors);
        writer.writeEnumValue<ReplyRestriction>("replyRestriction", this.replyRestriction);
        writer.writeEnumValue<UserNewMessageRestriction>("userNewMessageRestriction", this.userNewMessageRestriction);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userNewMessageRestriction property value. The userNewMessageRestriction property
     * @returns a userNewMessageRestriction
     */
    public get userNewMessageRestriction() {
        return this._userNewMessageRestriction;
    };
    /**
     * Sets the userNewMessageRestriction property value. The userNewMessageRestriction property
     * @param value Value to set for the userNewMessageRestriction property.
     */
    public set userNewMessageRestriction(value: UserNewMessageRestriction | undefined) {
        this._userNewMessageRestriction = value;
    };
}
