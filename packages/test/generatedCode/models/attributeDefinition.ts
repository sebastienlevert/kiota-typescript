import {AttributeType} from './attributeType';
import {createMetadataEntryFromDiscriminatorValue} from './createMetadataEntryFromDiscriminatorValue';
import {createReferencedObjectFromDiscriminatorValue} from './createReferencedObjectFromDiscriminatorValue';
import {createStringKeyStringValuePairFromDiscriminatorValue} from './createStringKeyStringValuePairFromDiscriminatorValue';
import {MetadataEntry, ReferencedObject, StringKeyStringValuePair} from './index';
import {Mutability} from './mutability';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttributeDefinition implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** true if the attribute should be used as the anchor for the object. Anchor attributes must have a unique value identifying an object, and must be immutable. Default is false. One, and only one, of the object's attributes must be designated as the anchor to support synchronization. */
    private _anchor?: boolean | undefined;
    /** The apiExpressions property */
    private _apiExpressions?: StringKeyStringValuePair[] | undefined;
    /** true if value of this attribute should be treated as case-sensitive. This setting affects how the synchronization engine detects changes for the attribute. */
    private _caseExact?: boolean | undefined;
    /** The defaultValue property */
    private _defaultValue?: string | undefined;
    /** 'true' to allow null values for attributes. */
    private _flowNullValues?: boolean | undefined;
    /** Additional extension properties. Unless mentioned explicitly, metadata values should not be changed. */
    private _metadata?: MetadataEntry[] | undefined;
    /** true if an attribute can have multiple values. Default is false. */
    private _multivalued?: boolean | undefined;
    /** The mutability property */
    private _mutability?: Mutability | undefined;
    /** Name of the attribute. Must be unique within the object definition. Not nullable. */
    private _name?: string | undefined;
    /** For attributes with reference type, lists referenced objects (for example, the manager attribute would list User as the referenced object). */
    private _referencedObjects?: ReferencedObject[] | undefined;
    /** true if attribute is required. Object can not be created if any of the required attributes are missing. If during synchronization, the required attribute has no value, the default value will be used. If default the value was not set, synchronization will record an error. */
    private _required?: boolean | undefined;
    /** The type property */
    private _type?: AttributeType | undefined;
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
     * Gets the anchor property value. true if the attribute should be used as the anchor for the object. Anchor attributes must have a unique value identifying an object, and must be immutable. Default is false. One, and only one, of the object's attributes must be designated as the anchor to support synchronization.
     * @returns a boolean
     */
    public get anchor() {
        return this._anchor;
    };
    /**
     * Sets the anchor property value. true if the attribute should be used as the anchor for the object. Anchor attributes must have a unique value identifying an object, and must be immutable. Default is false. One, and only one, of the object's attributes must be designated as the anchor to support synchronization.
     * @param value Value to set for the anchor property.
     */
    public set anchor(value: boolean | undefined) {
        this._anchor = value;
    };
    /**
     * Gets the apiExpressions property value. The apiExpressions property
     * @returns a stringKeyStringValuePair
     */
    public get apiExpressions() {
        return this._apiExpressions;
    };
    /**
     * Sets the apiExpressions property value. The apiExpressions property
     * @param value Value to set for the apiExpressions property.
     */
    public set apiExpressions(value: StringKeyStringValuePair[] | undefined) {
        this._apiExpressions = value;
    };
    /**
     * Gets the caseExact property value. true if value of this attribute should be treated as case-sensitive. This setting affects how the synchronization engine detects changes for the attribute.
     * @returns a boolean
     */
    public get caseExact() {
        return this._caseExact;
    };
    /**
     * Sets the caseExact property value. true if value of this attribute should be treated as case-sensitive. This setting affects how the synchronization engine detects changes for the attribute.
     * @param value Value to set for the caseExact property.
     */
    public set caseExact(value: boolean | undefined) {
        this._caseExact = value;
    };
    /**
     * Instantiates a new attributeDefinition and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the defaultValue property value. The defaultValue property
     * @returns a string
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Sets the defaultValue property value. The defaultValue property
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: string | undefined) {
        this._defaultValue = value;
    };
    /**
     * Gets the flowNullValues property value. 'true' to allow null values for attributes.
     * @returns a boolean
     */
    public get flowNullValues() {
        return this._flowNullValues;
    };
    /**
     * Sets the flowNullValues property value. 'true' to allow null values for attributes.
     * @param value Value to set for the flowNullValues property.
     */
    public set flowNullValues(value: boolean | undefined) {
        this._flowNullValues = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "anchor": n => { this.anchor = n.getBooleanValue(); },
            "apiExpressions": n => { this.apiExpressions = n.getCollectionOfObjectValues<StringKeyStringValuePair>(createStringKeyStringValuePairFromDiscriminatorValue); },
            "caseExact": n => { this.caseExact = n.getBooleanValue(); },
            "defaultValue": n => { this.defaultValue = n.getStringValue(); },
            "flowNullValues": n => { this.flowNullValues = n.getBooleanValue(); },
            "metadata": n => { this.metadata = n.getCollectionOfObjectValues<MetadataEntry>(createMetadataEntryFromDiscriminatorValue); },
            "multivalued": n => { this.multivalued = n.getBooleanValue(); },
            "mutability": n => { this.mutability = n.getEnumValue<Mutability>(Mutability); },
            "name": n => { this.name = n.getStringValue(); },
            "referencedObjects": n => { this.referencedObjects = n.getCollectionOfObjectValues<ReferencedObject>(createReferencedObjectFromDiscriminatorValue); },
            "required": n => { this.required = n.getBooleanValue(); },
            "type": n => { this.type = n.getEnumValue<AttributeType>(AttributeType); },
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
     * Gets the multivalued property value. true if an attribute can have multiple values. Default is false.
     * @returns a boolean
     */
    public get multivalued() {
        return this._multivalued;
    };
    /**
     * Sets the multivalued property value. true if an attribute can have multiple values. Default is false.
     * @param value Value to set for the multivalued property.
     */
    public set multivalued(value: boolean | undefined) {
        this._multivalued = value;
    };
    /**
     * Gets the mutability property value. The mutability property
     * @returns a mutability
     */
    public get mutability() {
        return this._mutability;
    };
    /**
     * Sets the mutability property value. The mutability property
     * @param value Value to set for the mutability property.
     */
    public set mutability(value: Mutability | undefined) {
        this._mutability = value;
    };
    /**
     * Gets the name property value. Name of the attribute. Must be unique within the object definition. Not nullable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the attribute. Must be unique within the object definition. Not nullable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the referencedObjects property value. For attributes with reference type, lists referenced objects (for example, the manager attribute would list User as the referenced object).
     * @returns a referencedObject
     */
    public get referencedObjects() {
        return this._referencedObjects;
    };
    /**
     * Sets the referencedObjects property value. For attributes with reference type, lists referenced objects (for example, the manager attribute would list User as the referenced object).
     * @param value Value to set for the referencedObjects property.
     */
    public set referencedObjects(value: ReferencedObject[] | undefined) {
        this._referencedObjects = value;
    };
    /**
     * Gets the required property value. true if attribute is required. Object can not be created if any of the required attributes are missing. If during synchronization, the required attribute has no value, the default value will be used. If default the value was not set, synchronization will record an error.
     * @returns a boolean
     */
    public get required() {
        return this._required;
    };
    /**
     * Sets the required property value. true if attribute is required. Object can not be created if any of the required attributes are missing. If during synchronization, the required attribute has no value, the default value will be used. If default the value was not set, synchronization will record an error.
     * @param value Value to set for the required property.
     */
    public set required(value: boolean | undefined) {
        this._required = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("anchor", this.anchor);
        writer.writeCollectionOfObjectValues<StringKeyStringValuePair>("apiExpressions", this.apiExpressions);
        writer.writeBooleanValue("caseExact", this.caseExact);
        writer.writeStringValue("defaultValue", this.defaultValue);
        writer.writeBooleanValue("flowNullValues", this.flowNullValues);
        writer.writeCollectionOfObjectValues<MetadataEntry>("metadata", this.metadata);
        writer.writeBooleanValue("multivalued", this.multivalued);
        writer.writeEnumValue<Mutability>("mutability", this.mutability);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<ReferencedObject>("referencedObjects", this.referencedObjects);
        writer.writeBooleanValue("required", this.required);
        writer.writeEnumValue<AttributeType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a attributeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: AttributeType | undefined) {
        this._type = value;
    };
}
