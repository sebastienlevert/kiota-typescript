import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceKey implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The deviceId property */
    private _deviceId?: string | undefined;
    /** The keyMaterial property */
    private _keyMaterial?: string | undefined;
    /** The keyType property */
    private _keyType?: string | undefined;
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
     * Instantiates a new deviceKey and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceId property value. The deviceId property
     * @returns a Guid
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. The deviceId property
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceId": n => { this.deviceId = n.getGuidValue(); },
            "keyMaterial": n => { this.keyMaterial = n.getStringValue(); },
            "keyType": n => { this.keyType = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyMaterial property value. The keyMaterial property
     * @returns a binary
     */
    public get keyMaterial() {
        return this._keyMaterial;
    };
    /**
     * Sets the keyMaterial property value. The keyMaterial property
     * @param value Value to set for the keyMaterial property.
     */
    public set keyMaterial(value: string | undefined) {
        this._keyMaterial = value;
    };
    /**
     * Gets the keyType property value. The keyType property
     * @returns a string
     */
    public get keyType() {
        return this._keyType;
    };
    /**
     * Sets the keyType property value. The keyType property
     * @param value Value to set for the keyType property.
     */
    public set keyType(value: string | undefined) {
        this._keyType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        //writer.writeGuidValue("deviceId", this.deviceId);
        writer.writeStringValue("keyMaterial", this.keyMaterial);
        writer.writeStringValue("keyType", this.keyType);
        writer.writeAdditionalData(this.additionalData);
    };
}
