import {createMetadataEntryFromDiscriminatorValue} from './createMetadataEntryFromDiscriminatorValue';
import {createSynchronizationSchemaFromDiscriminatorValue} from './createSynchronizationSchemaFromDiscriminatorValue';
import {Entity, MetadataEntry, SynchronizationSchema} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

 interface Guid{}
export class SynchronizationTemplate extends Entity implements Parsable {
    /** Identifier of the application this template belongs to. */
    private _applicationId?: string | undefined;
    /** true if this template is recommended to be the default for the application. */
    private _default_escaped?: boolean | undefined;
    /** Description of the template. */
    private _description?: string | undefined;
    /** true if this template should appear in the collection of templates available for the application instance (service principal). */
    private _discoverable?: boolean | undefined;
    /** One of the well-known factory tags supported by the synchronization engine. The factoryTag tells the synchronization engine which implementation to use when processing jobs based on this template. */
    private _factoryTag?: string | undefined;
    /** Additional extension properties. Unless mentioned explicitly, metadata values should not be changed. */
    private _metadata?: MetadataEntry[] | undefined;
    /** The schema property */
    private _schema?: SynchronizationSchema | undefined;
    /**
     * Gets the applicationId property value. Identifier of the application this template belongs to.
     * @returns a Guid
     */
    public get applicationId() {
        return this._applicationId;
    };
    /**
     * Sets the applicationId property value. Identifier of the application this template belongs to.
     * @param value Value to set for the applicationId property.
     */
    public set applicationId(value: string | undefined) {
        this._applicationId = value;
    };
    /**
     * Instantiates a new synchronizationTemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the default property value. true if this template is recommended to be the default for the application.
     * @returns a boolean
     */
    public get default_escaped() {
        return this._default_escaped;
    };
    /**
     * Sets the default property value. true if this template is recommended to be the default for the application.
     * @param value Value to set for the default_escaped property.
     */
    public set default_escaped(value: boolean | undefined) {
        this._default_escaped = value;
    };
    /**
     * Gets the description property value. Description of the template.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the template.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the discoverable property value. true if this template should appear in the collection of templates available for the application instance (service principal).
     * @returns a boolean
     */
    public get discoverable() {
        return this._discoverable;
    };
    /**
     * Sets the discoverable property value. true if this template should appear in the collection of templates available for the application instance (service principal).
     * @param value Value to set for the discoverable property.
     */
    public set discoverable(value: boolean | undefined) {
        this._discoverable = value;
    };
    /**
     * Gets the factoryTag property value. One of the well-known factory tags supported by the synchronization engine. The factoryTag tells the synchronization engine which implementation to use when processing jobs based on this template.
     * @returns a string
     */
    public get factoryTag() {
        return this._factoryTag;
    };
    /**
     * Sets the factoryTag property value. One of the well-known factory tags supported by the synchronization engine. The factoryTag tells the synchronization engine which implementation to use when processing jobs based on this template.
     * @param value Value to set for the factoryTag property.
     */
    public set factoryTag(value: string | undefined) {
        this._factoryTag = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationId": n => { this.applicationId = n.getGuidValue(); },
            "default": n => { this.default_escaped = n.getBooleanValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "discoverable": n => { this.discoverable = n.getBooleanValue(); },
            "factoryTag": n => { this.factoryTag = n.getStringValue(); },
            "metadata": n => { this.metadata = n.getCollectionOfObjectValues<MetadataEntry>(createMetadataEntryFromDiscriminatorValue); },
            "schema": n => { this.schema = n.getObjectValue<SynchronizationSchema>(createSynchronizationSchemaFromDiscriminatorValue); },
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
     * Gets the schema property value. The schema property
     * @returns a synchronizationSchema
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Sets the schema property value. The schema property
     * @param value Value to set for the schema property.
     */
    public set schema(value: SynchronizationSchema | undefined) {
        this._schema = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        //writer.writeGuidValue("applicationId", this.applicationId);
        writer.writeBooleanValue("default", this.default_escaped);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("discoverable", this.discoverable);
        writer.writeStringValue("factoryTag", this.factoryTag);
        writer.writeCollectionOfObjectValues<MetadataEntry>("metadata", this.metadata);
        writer.writeObjectValue<SynchronizationSchema>("schema", this.schema);
    };
}
