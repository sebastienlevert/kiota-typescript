import {Entity} from '../';
import {createSensitivityLabelFromDiscriminatorValue} from './createSensitivityLabelFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SensitivityLabel extends Entity implements Parsable {
    /** The color that the UI should display for the label, if configured. */
    private _color?: string | undefined;
    /** Returns the supported content formats for the label. */
    private _contentFormats?: string[] | undefined;
    /** The admin-defined description for the label. */
    private _description?: string | undefined;
    /** Indicates whether the label has protection actions configured. */
    private _hasProtection?: boolean | undefined;
    /** Indicates whether the label is active or not. Active labels should be hidden or disabled in the UI. */
    private _isActive?: boolean | undefined;
    /** Indicates whether the label can be applied to content. False if the label is a parent with child labels. */
    private _isAppliable?: boolean | undefined;
    /** The plaintext name of the label. */
    private _name?: string | undefined;
    /** The parent property */
    private _parent?: SensitivityLabel | undefined;
    /** The sensitivity value of the label, where lower is less sensitive. */
    private _sensitivity?: number | undefined;
    /** The tooltip that should be displayed for the label in a UI. */
    private _tooltip?: string | undefined;
    /**
     * Gets the color property value. The color that the UI should display for the label, if configured.
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color that the UI should display for the label, if configured.
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new sensitivityLabel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentFormats property value. Returns the supported content formats for the label.
     * @returns a string
     */
    public get contentFormats() {
        return this._contentFormats;
    };
    /**
     * Sets the contentFormats property value. Returns the supported content formats for the label.
     * @param value Value to set for the contentFormats property.
     */
    public set contentFormats(value: string[] | undefined) {
        this._contentFormats = value;
    };
    /**
     * Gets the description property value. The admin-defined description for the label.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The admin-defined description for the label.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "color": n => { this.color = n.getStringValue(); },
            "contentFormats": n => { this.contentFormats = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "hasProtection": n => { this.hasProtection = n.getBooleanValue(); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "isAppliable": n => { this.isAppliable = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parent": n => { this.parent = n.getObjectValue<SensitivityLabel>(createSensitivityLabelFromDiscriminatorValue); },
            "sensitivity": n => { this.sensitivity = n.getNumberValue(); },
            "tooltip": n => { this.tooltip = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasProtection property value. Indicates whether the label has protection actions configured.
     * @returns a boolean
     */
    public get hasProtection() {
        return this._hasProtection;
    };
    /**
     * Sets the hasProtection property value. Indicates whether the label has protection actions configured.
     * @param value Value to set for the hasProtection property.
     */
    public set hasProtection(value: boolean | undefined) {
        this._hasProtection = value;
    };
    /**
     * Gets the isActive property value. Indicates whether the label is active or not. Active labels should be hidden or disabled in the UI.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether the label is active or not. Active labels should be hidden or disabled in the UI.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Gets the isAppliable property value. Indicates whether the label can be applied to content. False if the label is a parent with child labels.
     * @returns a boolean
     */
    public get isAppliable() {
        return this._isAppliable;
    };
    /**
     * Sets the isAppliable property value. Indicates whether the label can be applied to content. False if the label is a parent with child labels.
     * @param value Value to set for the isAppliable property.
     */
    public set isAppliable(value: boolean | undefined) {
        this._isAppliable = value;
    };
    /**
     * Gets the name property value. The plaintext name of the label.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The plaintext name of the label.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the parent property value. The parent property
     * @returns a sensitivityLabel
     */
    public get parent() {
        return this._parent;
    };
    /**
     * Sets the parent property value. The parent property
     * @param value Value to set for the parent property.
     */
    public set parent(value: SensitivityLabel | undefined) {
        this._parent = value;
    };
    /**
     * Gets the sensitivity property value. The sensitivity value of the label, where lower is less sensitive.
     * @returns a integer
     */
    public get sensitivity() {
        return this._sensitivity;
    };
    /**
     * Sets the sensitivity property value. The sensitivity value of the label, where lower is less sensitive.
     * @param value Value to set for the sensitivity property.
     */
    public set sensitivity(value: number | undefined) {
        this._sensitivity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("color", this.color);
        writer.writeCollectionOfPrimitiveValues<string>("contentFormats", this.contentFormats);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("hasProtection", this.hasProtection);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeBooleanValue("isAppliable", this.isAppliable);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<SensitivityLabel>("parent", this.parent);
        writer.writeNumberValue("sensitivity", this.sensitivity);
        writer.writeStringValue("tooltip", this.tooltip);
    };
    /**
     * Gets the tooltip property value. The tooltip that should be displayed for the label in a UI.
     * @returns a string
     */
    public get tooltip() {
        return this._tooltip;
    };
    /**
     * Sets the tooltip property value. The tooltip that should be displayed for the label in a UI.
     * @param value Value to set for the tooltip property.
     */
    public set tooltip(value: string | undefined) {
        this._tooltip = value;
    };
}
