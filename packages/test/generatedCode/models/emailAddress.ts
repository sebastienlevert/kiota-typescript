import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAddress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The email address of the person or entity. */
    private _address?: string | undefined;
    /** The display name of the person or entity. */
    private _name?: string | undefined;
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
     * Gets the address property value. The email address of the person or entity.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address of the person or entity.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new emailAddress and sets the default values.
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
            "address": n => { this.address = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The display name of the person or entity.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the person or entity.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
