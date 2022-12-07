import {createObjectDefinitionFromDiscriminatorValue} from './createObjectDefinitionFromDiscriminatorValue';
import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {Entity, ObjectDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryDefinition extends Entity implements Parsable {
    /** The discoverabilities property */
    private _discoverabilities?: DirectoryDefinitionDiscoverabilities | undefined;
    /** Represents the discovery date and time using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _discoveryDateTime?: Date | undefined;
    /** Name of the directory. Must be unique within the synchronization schema. Not nullable. */
    private _name?: string | undefined;
    /** Collection of objects supported by the directory. */
    private _objects?: ObjectDefinition[] | undefined;
    /** The readOnly property */
    private _readOnly?: boolean | undefined;
    /** Read only value that indicates version discovered. null if discovery has not yet occurred. */
    private _version?: string | undefined;
    /**
     * Instantiates a new directoryDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the discoverabilities property value. The discoverabilities property
     * @returns a directoryDefinitionDiscoverabilities
     */
    public get discoverabilities() {
        return this._discoverabilities;
    };
    /**
     * Sets the discoverabilities property value. The discoverabilities property
     * @param value Value to set for the discoverabilities property.
     */
    public set discoverabilities(value: DirectoryDefinitionDiscoverabilities | undefined) {
        this._discoverabilities = value;
    };
    /**
     * Gets the discoveryDateTime property value. Represents the discovery date and time using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get discoveryDateTime() {
        return this._discoveryDateTime;
    };
    /**
     * Sets the discoveryDateTime property value. Represents the discovery date and time using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the discoveryDateTime property.
     */
    public set discoveryDateTime(value: Date | undefined) {
        this._discoveryDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "discoverabilities": n => { this.discoverabilities = n.getEnumValue<DirectoryDefinitionDiscoverabilities>(DirectoryDefinitionDiscoverabilities); },
            "discoveryDateTime": n => { this.discoveryDateTime = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "objects": n => { this.objects = n.getCollectionOfObjectValues<ObjectDefinition>(createObjectDefinitionFromDiscriminatorValue); },
            "readOnly": n => { this.readOnly = n.getBooleanValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the directory. Must be unique within the synchronization schema. Not nullable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the directory. Must be unique within the synchronization schema. Not nullable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the objects property value. Collection of objects supported by the directory.
     * @returns a objectDefinition
     */
    public get objects() {
        return this._objects;
    };
    /**
     * Sets the objects property value. Collection of objects supported by the directory.
     * @param value Value to set for the objects property.
     */
    public set objects(value: ObjectDefinition[] | undefined) {
        this._objects = value;
    };
    /**
     * Gets the readOnly property value. The readOnly property
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Sets the readOnly property value. The readOnly property
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        this._readOnly = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<DirectoryDefinitionDiscoverabilities>("discoverabilities", this.discoverabilities);
        writer.writeDateValue("discoveryDateTime", this.discoveryDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<ObjectDefinition>("objects", this.objects);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the version property value. Read only value that indicates version discovered. null if discovery has not yet occurred.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Read only value that indicates version discovered. null if discovery has not yet occurred.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
