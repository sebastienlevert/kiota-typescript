import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createOutlookTaskFromDiscriminatorValue} from './createOutlookTaskFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Entity, MultiValueLegacyExtendedProperty, OutlookTask, SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
export interface Guid{}
export class OutlookTaskFolder extends Entity implements Parsable {
    /** The version of the task folder. */
    private _changeKey?: string | undefined;
    /** True if the folder is the default task folder. */
    private _isDefaultFolder?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the task folder. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The name of the task folder. */
    private _name?: string | undefined;
    /** The unique GUID identifier for the task folder's parent group. */
    private _parentGroupKey?: string | undefined;
    /** The collection of single-value extended properties defined for the task folder. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The tasks in this task folder. Read-only. Nullable. */
    private _tasks?: OutlookTask[] | undefined;
    /**
     * Gets the changeKey property value. The version of the task folder.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. The version of the task folder.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Instantiates a new outlookTaskFolder and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "isDefaultFolder": n => { this.isDefaultFolder = n.getBooleanValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "parentGroupKey": n => { this.parentGroupKey = n.getGuidValue(); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<OutlookTask>(createOutlookTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isDefaultFolder property value. True if the folder is the default task folder.
     * @returns a boolean
     */
    public get isDefaultFolder() {
        return this._isDefaultFolder;
    };
    /**
     * Sets the isDefaultFolder property value. True if the folder is the default task folder.
     * @param value Value to set for the isDefaultFolder property.
     */
    public set isDefaultFolder(value: boolean | undefined) {
        this._isDefaultFolder = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the task folder. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the task folder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the name property value. The name of the task folder.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the task folder.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the parentGroupKey property value. The unique GUID identifier for the task folder's parent group.
     * @returns a Guid
     */
    public get parentGroupKey() {
        return this._parentGroupKey;
    };
    /**
     * Sets the parentGroupKey property value. The unique GUID identifier for the task folder's parent group.
     * @param value Value to set for the parentGroupKey property.
     */
    public set parentGroupKey(value: string | undefined) {
        this._parentGroupKey = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeBooleanValue("isDefaultFolder", this.isDefaultFolder);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("name", this.name);
        //writer.writeGuidValue("parentGroupKey", this.parentGroupKey);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeCollectionOfObjectValues<OutlookTask>("tasks", this.tasks);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the task folder. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the task folder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Gets the tasks property value. The tasks in this task folder. Read-only. Nullable.
     * @returns a outlookTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. The tasks in this task folder. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: OutlookTask[] | undefined) {
        this._tasks = value;
    };
}
