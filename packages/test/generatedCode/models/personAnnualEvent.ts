import {ItemFacet} from './index';
import {PersonAnnualEventType} from './personAnnualEventType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonAnnualEvent extends ItemFacet implements Parsable {
    /** The date property */
    private _date?: DateOnly | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The type property */
    private _type?: PersonAnnualEventType | undefined;
    /**
     * Instantiates a new personAnnualEvent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the date property value. The date property
     * @returns a DateOnly
     */
    public get date() {
        return this._date;
    };
    /**
     * Sets the date property value. The date property
     * @param value Value to set for the date property.
     */
    public set date(value: DateOnly | undefined) {
        this._date = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
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
            "date": n => { this.date = n.getDateOnlyValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PersonAnnualEventType>(PersonAnnualEventType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateOnlyValue("date", this.date);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<PersonAnnualEventType>("type", this.type);
    };
    /**
     * Gets the type property value. The type property
     * @returns a personAnnualEventType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: PersonAnnualEventType | undefined) {
        this._type = value;
    };
}
