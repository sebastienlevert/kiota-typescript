import {EmailType} from './emailType';
import {ItemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemEmail extends ItemFacet implements Parsable {
    /** The email address itself. */
    private _address?: string | undefined;
    /** The name or label a user has associated with a particular email address. */
    private _displayName?: string | undefined;
    /** The type property */
    private _type?: EmailType | undefined;
    /**
     * Gets the address property value. The email address itself.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address itself.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new itemEmail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name or label a user has associated with a particular email address.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name or label a user has associated with a particular email address.
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
            "address": n => { this.address = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<EmailType>(EmailType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<EmailType>("type", this.type);
    };
    /**
     * Gets the type property value. The type property
     * @returns a emailType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: EmailType | undefined) {
        this._type = value;
    };
}
