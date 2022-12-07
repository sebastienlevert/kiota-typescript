import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WritebackConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether writeback of cloud groups to on-premise Active Directory is enabled. Default value is true for Microsoft 365 groups and false for security groups. */
    private _isEnabled?: boolean | undefined;
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
     * Instantiates a new writebackConfiguration and sets the default values.
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
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Indicates whether writeback of cloud groups to on-premise Active Directory is enabled. Default value is true for Microsoft 365 groups and false for security groups.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether writeback of cloud groups to on-premise Active Directory is enabled. Default value is true for Microsoft 365 groups and false for security groups.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeAdditionalData(this.additionalData);
    };
}
