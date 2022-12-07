import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue} from './createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue';
import {ChatMessagePolicyViolationPolicyTip} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The dlpAction property */
    private _dlpAction?: ChatMessagePolicyViolationDlpActionTypes | undefined;
    /** Justification text provided by the sender of the message when overriding a policy violation. */
    private _justificationText?: string | undefined;
    /** The policyTip property */
    private _policyTip?: ChatMessagePolicyViolationPolicyTip | undefined;
    /** The userAction property */
    private _userAction?: ChatMessagePolicyViolationUserActionTypes | undefined;
    /** The verdictDetails property */
    private _verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes | undefined;
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
     * Instantiates a new chatMessagePolicyViolation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dlpAction property value. The dlpAction property
     * @returns a chatMessagePolicyViolationDlpActionTypes
     */
    public get dlpAction() {
        return this._dlpAction;
    };
    /**
     * Sets the dlpAction property value. The dlpAction property
     * @param value Value to set for the dlpAction property.
     */
    public set dlpAction(value: ChatMessagePolicyViolationDlpActionTypes | undefined) {
        this._dlpAction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dlpAction": n => { this.dlpAction = n.getEnumValue<ChatMessagePolicyViolationDlpActionTypes>(ChatMessagePolicyViolationDlpActionTypes); },
            "justificationText": n => { this.justificationText = n.getStringValue(); },
            "policyTip": n => { this.policyTip = n.getObjectValue<ChatMessagePolicyViolationPolicyTip>(createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue); },
            "userAction": n => { this.userAction = n.getEnumValue<ChatMessagePolicyViolationUserActionTypes>(ChatMessagePolicyViolationUserActionTypes); },
            "verdictDetails": n => { this.verdictDetails = n.getEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>(ChatMessagePolicyViolationVerdictDetailsTypes); },
        };
    };
    /**
     * Gets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @returns a string
     */
    public get justificationText() {
        return this._justificationText;
    };
    /**
     * Sets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @param value Value to set for the justificationText property.
     */
    public set justificationText(value: string | undefined) {
        this._justificationText = value;
    };
    /**
     * Gets the policyTip property value. The policyTip property
     * @returns a chatMessagePolicyViolationPolicyTip
     */
    public get policyTip() {
        return this._policyTip;
    };
    /**
     * Sets the policyTip property value. The policyTip property
     * @param value Value to set for the policyTip property.
     */
    public set policyTip(value: ChatMessagePolicyViolationPolicyTip | undefined) {
        this._policyTip = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ChatMessagePolicyViolationDlpActionTypes>("dlpAction", this.dlpAction);
        writer.writeStringValue("justificationText", this.justificationText);
        writer.writeObjectValue<ChatMessagePolicyViolationPolicyTip>("policyTip", this.policyTip);
        writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes>("userAction", this.userAction);
        writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>("verdictDetails", this.verdictDetails);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userAction property value. The userAction property
     * @returns a chatMessagePolicyViolationUserActionTypes
     */
    public get userAction() {
        return this._userAction;
    };
    /**
     * Sets the userAction property value. The userAction property
     * @param value Value to set for the userAction property.
     */
    public set userAction(value: ChatMessagePolicyViolationUserActionTypes | undefined) {
        this._userAction = value;
    };
    /**
     * Gets the verdictDetails property value. The verdictDetails property
     * @returns a chatMessagePolicyViolationVerdictDetailsTypes
     */
    public get verdictDetails() {
        return this._verdictDetails;
    };
    /**
     * Sets the verdictDetails property value. The verdictDetails property
     * @param value Value to set for the verdictDetails property.
     */
    public set verdictDetails(value: ChatMessagePolicyViolationVerdictDetailsTypes | undefined) {
        this._verdictDetails = value;
    };
}
