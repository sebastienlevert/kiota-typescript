import {CategoryColor} from './categoryColor';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookCategory extends Entity implements Parsable {
    /** The color property */
    private _color?: CategoryColor | undefined;
    /** A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only. */
    private _displayName?: string | undefined;
    /**
     * Gets the color property value. The color property
     * @returns a categoryColor
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color property
     * @param value Value to set for the color property.
     */
    public set color(value: CategoryColor | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new outlookCategory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.
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
            "color": n => { this.color = n.getEnumValue<CategoryColor>(CategoryColor); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<CategoryColor>("color", this.color);
        writer.writeStringValue("displayName", this.displayName);
    };
}
