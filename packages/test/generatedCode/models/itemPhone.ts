import {ItemFacet} from './index';
import {PhoneType} from './phoneType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPhone extends ItemFacet implements Parsable {
    /** Friendly name the user has assigned this phone number. */
    private _displayName?: string | undefined;
    /** Phone number provided by the user. */
    private _number?: string | undefined;
    /** The type property */
    private _type?: PhoneType | undefined;
    /**
     * Instantiates a new itemPhone and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Friendly name the user has assigned this phone number.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Friendly name the user has assigned this phone number.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "number": n => { this.number = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PhoneType>(PhoneType); },
        };
    };
    /**
     * Gets the number property value. Phone number provided by the user.
     * @returns a string
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. Phone number provided by the user.
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
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("number", this.number);
        writer.writeEnumValue<PhoneType>("type", this.type);
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
