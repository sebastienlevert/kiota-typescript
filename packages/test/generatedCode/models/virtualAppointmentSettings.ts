import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VirtualAppointmentSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether the client can use the browser to join a virtual appointment. If set to false, the client can only use Microsoft Teams to join. Optional. */
    private _allowClientToJoinUsingBrowser?: boolean | undefined;
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
     * Gets the allowClientToJoinUsingBrowser property value. Indicates whether the client can use the browser to join a virtual appointment. If set to false, the client can only use Microsoft Teams to join. Optional.
     * @returns a boolean
     */
    public get allowClientToJoinUsingBrowser() {
        return this._allowClientToJoinUsingBrowser;
    };
    /**
     * Sets the allowClientToJoinUsingBrowser property value. Indicates whether the client can use the browser to join a virtual appointment. If set to false, the client can only use Microsoft Teams to join. Optional.
     * @param value Value to set for the allowClientToJoinUsingBrowser property.
     */
    public set allowClientToJoinUsingBrowser(value: boolean | undefined) {
        this._allowClientToJoinUsingBrowser = value;
    };
    /**
     * Instantiates a new virtualAppointmentSettings and sets the default values.
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
            "allowClientToJoinUsingBrowser": n => { this.allowClientToJoinUsingBrowser = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowClientToJoinUsingBrowser", this.allowClientToJoinUsingBrowser);
        writer.writeAdditionalData(this.additionalData);
    };
}
