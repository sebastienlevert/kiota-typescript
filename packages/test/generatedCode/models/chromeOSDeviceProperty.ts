import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a property of the ChromeOS device. */
export class ChromeOSDeviceProperty implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the property */
    private _name?: string | undefined;
    /** Whether this property is updatable */
    private _updatable?: boolean | undefined;
    /** Value of the property */
    private _value?: string | undefined;
    /** Type of the value */
    private _valueType?: string | undefined;
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
     * Instantiates a new chromeOSDeviceProperty and sets the default values.
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
            "name": n => { this.name = n.getStringValue(); },
            "updatable": n => { this.updatable = n.getBooleanValue(); },
            "value": n => { this.value = n.getStringValue(); },
            "valueType": n => { this.valueType = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the property
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
        writer.writeStringValue("name", this.name);
        writer.writeBooleanValue("updatable", this.updatable);
        writer.writeStringValue("value", this.value);
        writer.writeStringValue("valueType", this.valueType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updatable property value. Whether this property is updatable
     * @returns a boolean
     */
    public get updatable() {
        return this._updatable;
    };
    /**
     * Sets the updatable property value. Whether this property is updatable
     * @param value Value to set for the updatable property.
     */
    public set updatable(value: boolean | undefined) {
        this._updatable = value;
    };
    /**
     * Gets the value property value. Value of the property
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value of the property
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
    /**
     * Gets the valueType property value. Type of the value
     * @returns a string
     */
    public get valueType() {
        return this._valueType;
    };
    /**
     * Sets the valueType property value. Type of the value
     * @param value Value to set for the valueType property.
     */
    public set valueType(value: string | undefined) {
        this._valueType = value;
    };
}
