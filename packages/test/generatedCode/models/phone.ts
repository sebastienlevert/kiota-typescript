import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Phone implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The phone number. */
    private _number?: string | undefined;
    /** The type property */
    private _type?: PhoneType | undefined;
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
     * Instantiates a new phone and sets the default values.
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
            "number": n => { this.number = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PhoneType>(PhoneType); },
        };
    };
    /**
     * Gets the number property value. The phone number.
     * @returns a string
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. The phone number.
     * @param value Value to set for the number property.
     */
    public set number(value: string | undefined) {
        this._number = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("number", this.number);
        writer.writeEnumValue<PhoneType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a phoneType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: PhoneType | undefined) {
        this._type = value;
    };
}
