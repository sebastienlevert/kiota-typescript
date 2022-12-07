import {createSettingValueFromDiscriminatorValue} from './createSettingValueFromDiscriminatorValue';
import {Entity, SettingValue} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectorySetting extends Entity implements Parsable {
    /** Display name of this group of settings, which comes from the associated template. Read-only. */
    private _displayName?: string | undefined;
    /** Unique identifier for the template used to create this group of settings. Read-only. */
    private _templateId?: string | undefined;
    /** Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced directorySettingTemplates object. */
    private _values?: SettingValue[] | undefined;
    /**
     * Instantiates a new directorySetting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of this group of settings, which comes from the associated template. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of this group of settings, which comes from the associated template. Read-only.
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
            "templateId": n => { this.templateId = n.getStringValue(); },
            "values": n => { this.values = n.getCollectionOfObjectValues<SettingValue>(createSettingValueFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("templateId", this.templateId);
        writer.writeCollectionOfObjectValues<SettingValue>("values", this.values);
    };
    /**
     * Gets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Sets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        this._templateId = value;
    };
    /**
     * Gets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced directorySettingTemplates object.
     * @returns a settingValue
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced directorySettingTemplates object.
     * @param value Value to set for the values property.
     */
    public set values(value: SettingValue[] | undefined) {
        this._values = value;
    };
}
