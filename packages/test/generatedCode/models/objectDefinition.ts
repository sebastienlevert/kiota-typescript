import {createAttributeDefinitionFromDiscriminatorValue} from './createAttributeDefinitionFromDiscriminatorValue';
import {createMetadataEntryFromDiscriminatorValue} from './createMetadataEntryFromDiscriminatorValue';
import {AttributeDefinition, MetadataEntry} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ObjectDefinition implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The attributes property */
    private _attributes?: AttributeDefinition[] | undefined;
    /** The metadata property */
    private _metadata?: MetadataEntry[] | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The supportedApis property */
    private _supportedApis?: string[] | undefined;
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
     * Gets the attributes property value. The attributes property
     * @returns a attributeDefinition
     */
    public get attributes() {
        return this._attributes;
    };
    /**
     * Sets the attributes property value. The attributes property
     * @param value Value to set for the attributes property.
     */
    public set attributes(value: AttributeDefinition[] | undefined) {
        this._attributes = value;
    };
    /**
     * Instantiates a new objectDefinition and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attributes": n => { this.attributes = n.getCollectionOfObjectValues<AttributeDefinition>(createAttributeDefinitionFromDiscriminatorValue); },
            "metadata": n => { this.metadata = n.getCollectionOfObjectValues<MetadataEntry>(createMetadataEntryFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "supportedApis": n => { this.supportedApis = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the metadata property value. The metadata property
     * @returns a metadataEntry
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. The metadata property
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: MetadataEntry[] | undefined) {
        this._metadata = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AttributeDefinition>("attributes", this.attributes);
        writer.writeCollectionOfObjectValues<MetadataEntry>("metadata", this.metadata);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("supportedApis", this.supportedApis);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the supportedApis property value. The supportedApis property
     * @returns a string
     */
    public get supportedApis() {
        return this._supportedApis;
    };
    /**
     * Sets the supportedApis property value. The supportedApis property
     * @param value Value to set for the supportedApis property.
     */
    public set supportedApis(value: string[] | undefined) {
        this._supportedApis = value;
    };
}
