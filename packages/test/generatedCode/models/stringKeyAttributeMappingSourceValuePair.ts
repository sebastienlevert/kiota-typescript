import {createAttributeMappingSourceFromDiscriminatorValue} from './createAttributeMappingSourceFromDiscriminatorValue';
import {AttributeMappingSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StringKeyAttributeMappingSourceValuePair implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name of the parameter. */
    private _key?: string | undefined;
    /** The value property */
    private _value?: AttributeMappingSource | undefined;
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
     * Instantiates a new stringKeyAttributeMappingSourceValuePair and sets the default values.
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
            "key": n => { this.key = n.getStringValue(); },
            "value": n => { this.value = n.getObjectValue<AttributeMappingSource>(createAttributeMappingSourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the key property value. The name of the parameter.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The name of the parameter.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("key", this.key);
        writer.writeObjectValue<AttributeMappingSource>("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a attributeMappingSource
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AttributeMappingSource | undefined) {
        this._value = value;
    };
}
