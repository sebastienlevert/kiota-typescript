import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutOfOfficeSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** True if either:It is currently in the out of office time window configured on the Outlook or Teams client.There is currently an event on the user's calendar that's marked as Show as Out of OfficeOtherwise, false. */
    private _isOutOfOffice?: boolean | undefined;
    /** The out of office message that the user configured on Outlook client (Automatic Replies (Out of Office)) or the Teams client (Schedule out of office). */
    private _message?: string | undefined;
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
     * Instantiates a new outOfOfficeSettings and sets the default values.
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
            "isOutOfOffice": n => { this.isOutOfOffice = n.getBooleanValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Gets the isOutOfOffice property value. True if either:It is currently in the out of office time window configured on the Outlook or Teams client.There is currently an event on the user's calendar that's marked as Show as Out of OfficeOtherwise, false.
     * @returns a boolean
     */
    public get isOutOfOffice() {
        return this._isOutOfOffice;
    };
    /**
     * Sets the isOutOfOffice property value. True if either:It is currently in the out of office time window configured on the Outlook or Teams client.There is currently an event on the user's calendar that's marked as Show as Out of OfficeOtherwise, false.
     * @param value Value to set for the isOutOfOffice property.
     */
    public set isOutOfOffice(value: boolean | undefined) {
        this._isOutOfOffice = value;
    };
    /**
     * Gets the message property value. The out of office message that the user configured on Outlook client (Automatic Replies (Out of Office)) or the Teams client (Schedule out of office).
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The out of office message that the user configured on Outlook client (Automatic Replies (Out of Office)) or the Teams client (Schedule out of office).
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isOutOfOffice", this.isOutOfOffice);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    };
}
