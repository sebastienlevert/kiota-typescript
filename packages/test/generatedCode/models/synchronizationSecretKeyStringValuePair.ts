import {SynchronizationSecret} from './synchronizationSecret';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationSecretKeyStringValuePair implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The key property */
    private _key?: SynchronizationSecret | undefined;
    /** The value of the secret. */
    private _value?: string | undefined;
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
     * Instantiates a new synchronizationSecretKeyStringValuePair and sets the default values.
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
            "key": n => { this.key = n.getEnumValue<SynchronizationSecret>(SynchronizationSecret); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. The key property
     * @returns a synchronizationSecret
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The key property
     * @param value Value to set for the key property.
     */
    public set key(value: SynchronizationSecret | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<SynchronizationSecret>("key", this.key);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value of the secret.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value of the secret.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
