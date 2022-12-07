import {createParentLabelDetailsFromDiscriminatorValue} from './createParentLabelDetailsFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParentLabelDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The color that the user interface should display for the label, if configured. */
    private _color?: string | undefined;
    /** The admin-defined description for the label. */
    private _description?: string | undefined;
    /** The label ID is a globally unique identifier (GUID). */
    private _id?: string | undefined;
    /** Indicates whether the label is active or not. Active labels should be hidden or disabled in user interfaces. */
    private _isActive?: boolean | undefined;
    /** The plaintext name of the label. */
    private _name?: string | undefined;
    /** The parent property */
    private _parent?: ParentLabelDetails | undefined;
    /** The sensitivity value of the label, where lower is less sensitive. */
    private _sensitivity?: number | undefined;
    /** The tooltip that should be displayed for the label in a user interface. */
    private _tooltip?: string | undefined;
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
     * Gets the color property value. The color that the user interface should display for the label, if configured.
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color that the user interface should display for the label, if configured.
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new parentLabelDetails and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        return {
            "color": n => { this.color = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parent": n => { this.parent = n.getObjectValue<ParentLabelDetails>(createParentLabelDetailsFromDiscriminatorValue); },
            "sensitivity": n => { this.sensitivity = n.getNumberValue(); },
            "tooltip": n => { this.tooltip = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The label ID is a globally unique identifier (GUID).
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The label ID is a globally unique identifier (GUID).
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the isActive property value. Indicates whether the label is active or not. Active labels should be hidden or disabled in user interfaces.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether the label is active or not. Active labels should be hidden or disabled in user interfaces.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
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
     * @returns a parentLabelDetails
     */
    public get parent() {
        return this._parent;
    };
    /**
     * Sets the parent property value. The parent property
     * @param value Value to set for the parent property.
     */
    public set parent(value: ParentLabelDetails | undefined) {
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
        writer.writeStringValue("color", this.color);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<ParentLabelDetails>("parent", this.parent);
        writer.writeNumberValue("sensitivity", this.sensitivity);
        writer.writeStringValue("tooltip", this.tooltip);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tooltip property value. The tooltip that should be displayed for the label in a user interface.
     * @returns a string
     */
    public get tooltip() {
        return this._tooltip;
    };
    /**
     * Sets the tooltip property value. The tooltip that should be displayed for the label in a user interface.
     * @param value Value to set for the tooltip property.
     */
    public set tooltip(value: string | undefined) {
        this._tooltip = value;
    };
}
