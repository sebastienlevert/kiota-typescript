import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VirtualAppointmentUser implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The display name of the user who participates in a virtual appointment. Optional. */
    private _displayName?: string | undefined;
    /** The email address of the user who participates in a virtual appointment. Optional. */
    private _emailAddress?: string | undefined;
    /** The phone number for sending SMS texts for the user who participates in a virtual appointment. Optional. */
    private _smsCapablePhoneNumber?: string | undefined;
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
     * Instantiates a new virtualAppointmentUser and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The display name of the user who participates in a virtual appointment. Optional.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the user who participates in a virtual appointment. Optional.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the emailAddress property value. The email address of the user who participates in a virtual appointment. Optional.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The email address of the user who participates in a virtual appointment. Optional.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "smsCapablePhoneNumber": n => { this.smsCapablePhoneNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeStringValue("smsCapablePhoneNumber", this.smsCapablePhoneNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the smsCapablePhoneNumber property value. The phone number for sending SMS texts for the user who participates in a virtual appointment. Optional.
     * @returns a string
     */
    public get smsCapablePhoneNumber() {
        return this._smsCapablePhoneNumber;
    };
    /**
     * Sets the smsCapablePhoneNumber property value. The phone number for sending SMS texts for the user who participates in a virtual appointment. Optional.
     * @param value Value to set for the smsCapablePhoneNumber property.
     */
    public set smsCapablePhoneNumber(value: string | undefined) {
        this._smsCapablePhoneNumber = value;
    };
}
