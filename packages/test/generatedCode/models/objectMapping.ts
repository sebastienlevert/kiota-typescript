import {createAttributeMappingFromDiscriminatorValue} from './createAttributeMappingFromDiscriminatorValue';
import {createFilterFromDiscriminatorValue} from './createFilterFromDiscriminatorValue';
import {createMetadataEntryFromDiscriminatorValue} from './createMetadataEntryFromDiscriminatorValue';
import {AttributeMapping, Filter, MetadataEntry} from './index';
import {ObjectFlowTypes} from './objectFlowTypes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ObjectMapping implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Attribute mappings define which attributes to map from the source object into the target object and how they should flow. A number of functions are available to support the transformation of the original source values. */
    private _attributeMappings?: AttributeMapping[] | undefined;
    /** When true, this object mapping will be processed during synchronization. When false, this object mapping will be skipped. */
    private _enabled?: boolean | undefined;
    /** The flowTypes property */
    private _flowTypes?: ObjectFlowTypes | undefined;
    /** Additional extension properties. Unless mentioned explicitly, metadata values should not be changed. */
    private _metadata?: MetadataEntry[] | undefined;
    /** Human-friendly name of the object mapping. */
    private _name?: string | undefined;
    /** The scope property */
    private _scope?: Filter | undefined;
    /** Name of the object in the source directory. Must match the object name from the source directory definition. */
    private _sourceObjectName?: string | undefined;
    /** Name of the object in target directory. Must match the object name from the target directory definition. */
    private _targetObjectName?: string | undefined;
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
     * Gets the attributeMappings property value. Attribute mappings define which attributes to map from the source object into the target object and how they should flow. A number of functions are available to support the transformation of the original source values.
     * @returns a attributeMapping
     */
    public get attributeMappings() {
        return this._attributeMappings;
    };
    /**
     * Sets the attributeMappings property value. Attribute mappings define which attributes to map from the source object into the target object and how they should flow. A number of functions are available to support the transformation of the original source values.
     * @param value Value to set for the attributeMappings property.
     */
    public set attributeMappings(value: AttributeMapping[] | undefined) {
        this._attributeMappings = value;
    };
    /**
     * Instantiates a new objectMapping and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. When true, this object mapping will be processed during synchronization. When false, this object mapping will be skipped.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. When true, this object mapping will be processed during synchronization. When false, this object mapping will be skipped.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * Gets the flowTypes property value. The flowTypes property
     * @returns a objectFlowTypes
     */
    public get flowTypes() {
        return this._flowTypes;
    };
    /**
     * Sets the flowTypes property value. The flowTypes property
     * @param value Value to set for the flowTypes property.
     */
    public set flowTypes(value: ObjectFlowTypes | undefined) {
        this._flowTypes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attributeMappings": n => { this.attributeMappings = n.getCollectionOfObjectValues<AttributeMapping>(createAttributeMappingFromDiscriminatorValue); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "flowTypes": n => { this.flowTypes = n.getEnumValue<ObjectFlowTypes>(ObjectFlowTypes); },
            "metadata": n => { this.metadata = n.getCollectionOfObjectValues<MetadataEntry>(createMetadataEntryFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "scope": n => { this.scope = n.getObjectValue<Filter>(createFilterFromDiscriminatorValue); },
            "sourceObjectName": n => { this.sourceObjectName = n.getStringValue(); },
            "targetObjectName": n => { this.targetObjectName = n.getStringValue(); },
        };
    };
    /**
     * Gets the metadata property value. Additional extension properties. Unless mentioned explicitly, metadata values should not be changed.
     * @returns a metadataEntry
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. Additional extension properties. Unless mentioned explicitly, metadata values should not be changed.
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: MetadataEntry[] | undefined) {
        this._metadata = value;
    };
    /**
     * Gets the name property value. Human-friendly name of the object mapping.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human-friendly name of the object mapping.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the scope property value. The scope property
     * @returns a filter
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. The scope property
     * @param value Value to set for the scope property.
     */
    public set scope(value: Filter | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AttributeMapping>("attributeMappings", this.attributeMappings);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeEnumValue<ObjectFlowTypes>("flowTypes", this.flowTypes);
        writer.writeCollectionOfObjectValues<MetadataEntry>("metadata", this.metadata);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Filter>("scope", this.scope);
        writer.writeStringValue("sourceObjectName", this.sourceObjectName);
        writer.writeStringValue("targetObjectName", this.targetObjectName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceObjectName property value. Name of the object in the source directory. Must match the object name from the source directory definition.
     * @returns a string
     */
    public get sourceObjectName() {
        return this._sourceObjectName;
    };
    /**
     * Sets the sourceObjectName property value. Name of the object in the source directory. Must match the object name from the source directory definition.
     * @param value Value to set for the sourceObjectName property.
     */
    public set sourceObjectName(value: string | undefined) {
        this._sourceObjectName = value;
    };
    /**
     * Gets the targetObjectName property value. Name of the object in target directory. Must match the object name from the target directory definition.
     * @returns a string
     */
    public get targetObjectName() {
        return this._targetObjectName;
    };
    /**
     * Sets the targetObjectName property value. Name of the object in target directory. Must match the object name from the target directory definition.
     * @param value Value to set for the targetObjectName property.
     */
    public set targetObjectName(value: string | undefined) {
        this._targetObjectName = value;
    };
}
