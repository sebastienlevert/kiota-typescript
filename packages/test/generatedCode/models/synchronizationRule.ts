import {createObjectMappingFromDiscriminatorValue} from './createObjectMappingFromDiscriminatorValue';
import {createStringKeyStringValuePairFromDiscriminatorValue} from './createStringKeyStringValuePairFromDiscriminatorValue';
import {ObjectMapping, StringKeyStringValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationRule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** true if the synchronization rule can be customized; false if this rule is read-only and should not be changed. */
    private _editable?: boolean | undefined;
    /** Synchronization rule identifier. Must be one of the identifiers recognized by the synchronization engine. Supported rule identifiers can be found in the synchronization template returned by the API. */
    private _id?: string | undefined;
    /** Additional extension properties. Unless instructed explicitly by the support team, metadata values should not be changed. */
    private _metadata?: StringKeyStringValuePair[] | undefined;
    /** Human-readable name of the synchronization rule. Not nullable. */
    private _name?: string | undefined;
    /** Collection of object mappings supported by the rule. Tells the synchronization engine which objects should be synchronized. */
    private _objectMappings?: ObjectMapping[] | undefined;
    /** Priority relative to other rules in the synchronizationSchema. Rules with the lowest priority number will be processed first. */
    private _priority?: number | undefined;
    /** Name of the source directory. Must match one of the directory definitions in synchronizationSchema. */
    private _sourceDirectoryName?: string | undefined;
    /** Name of the target directory. Must match one of the directory definitions in synchronizationSchema. */
    private _targetDirectoryName?: string | undefined;
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
     * Instantiates a new synchronizationRule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the editable property value. true if the synchronization rule can be customized; false if this rule is read-only and should not be changed.
     * @returns a boolean
     */
    public get editable() {
        return this._editable;
    };
    /**
     * Sets the editable property value. true if the synchronization rule can be customized; false if this rule is read-only and should not be changed.
     * @param value Value to set for the editable property.
     */
    public set editable(value: boolean | undefined) {
        this._editable = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "editable": n => { this.editable = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "metadata": n => { this.metadata = n.getCollectionOfObjectValues<StringKeyStringValuePair>(createStringKeyStringValuePairFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "objectMappings": n => { this.objectMappings = n.getCollectionOfObjectValues<ObjectMapping>(createObjectMappingFromDiscriminatorValue); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "sourceDirectoryName": n => { this.sourceDirectoryName = n.getStringValue(); },
            "targetDirectoryName": n => { this.targetDirectoryName = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Synchronization rule identifier. Must be one of the identifiers recognized by the synchronization engine. Supported rule identifiers can be found in the synchronization template returned by the API.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Synchronization rule identifier. Must be one of the identifiers recognized by the synchronization engine. Supported rule identifiers can be found in the synchronization template returned by the API.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the metadata property value. Additional extension properties. Unless instructed explicitly by the support team, metadata values should not be changed.
     * @returns a stringKeyStringValuePair
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. Additional extension properties. Unless instructed explicitly by the support team, metadata values should not be changed.
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: StringKeyStringValuePair[] | undefined) {
        this._metadata = value;
    };
    /**
     * Gets the name property value. Human-readable name of the synchronization rule. Not nullable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human-readable name of the synchronization rule. Not nullable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the objectMappings property value. Collection of object mappings supported by the rule. Tells the synchronization engine which objects should be synchronized.
     * @returns a objectMapping
     */
    public get objectMappings() {
        return this._objectMappings;
    };
    /**
     * Sets the objectMappings property value. Collection of object mappings supported by the rule. Tells the synchronization engine which objects should be synchronized.
     * @param value Value to set for the objectMappings property.
     */
    public set objectMappings(value: ObjectMapping[] | undefined) {
        this._objectMappings = value;
    };
    /**
     * Gets the priority property value. Priority relative to other rules in the synchronizationSchema. Rules with the lowest priority number will be processed first.
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. Priority relative to other rules in the synchronizationSchema. Rules with the lowest priority number will be processed first.
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("editable", this.editable);
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfObjectValues<StringKeyStringValuePair>("metadata", this.metadata);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<ObjectMapping>("objectMappings", this.objectMappings);
        writer.writeNumberValue("priority", this.priority);
        writer.writeStringValue("sourceDirectoryName", this.sourceDirectoryName);
        writer.writeStringValue("targetDirectoryName", this.targetDirectoryName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceDirectoryName property value. Name of the source directory. Must match one of the directory definitions in synchronizationSchema.
     * @returns a string
     */
    public get sourceDirectoryName() {
        return this._sourceDirectoryName;
    };
    /**
     * Sets the sourceDirectoryName property value. Name of the source directory. Must match one of the directory definitions in synchronizationSchema.
     * @param value Value to set for the sourceDirectoryName property.
     */
    public set sourceDirectoryName(value: string | undefined) {
        this._sourceDirectoryName = value;
    };
    /**
     * Gets the targetDirectoryName property value. Name of the target directory. Must match one of the directory definitions in synchronizationSchema.
     * @returns a string
     */
    public get targetDirectoryName() {
        return this._targetDirectoryName;
    };
    /**
     * Sets the targetDirectoryName property value. Name of the target directory. Must match one of the directory definitions in synchronizationSchema.
     * @param value Value to set for the targetDirectoryName property.
     */
    public set targetDirectoryName(value: string | undefined) {
        this._targetDirectoryName = value;
    };
}
