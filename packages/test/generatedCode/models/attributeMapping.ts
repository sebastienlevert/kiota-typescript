import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {createAttributeMappingSourceFromDiscriminatorValue} from './createAttributeMappingSourceFromDiscriminatorValue';
import {AttributeMappingSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttributeMapping implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Default value to be used in case the source property was evaluated to null. Optional. */
    private _defaultValue?: string | undefined;
    /** For internal use only. */
    private _exportMissingReferences?: boolean | undefined;
    /** The flowBehavior property */
    private _flowBehavior?: AttributeFlowBehavior | undefined;
    /** The flowType property */
    private _flowType?: AttributeFlowType | undefined;
    /** If higher than 0, this attribute will be used to perform an initial match of the objects between source and target directories. The synchronization engine will try to find the matching object using attribute with lowest value of matching priority first. If not found, the attribute with the next matching priority will be used, and so on a until match is found or no more matching attributes are left. Only attributes that are expected to have unique values, such as email, should be used as matching attributes. */
    private _matchingPriority?: number | undefined;
    /** The source property */
    private _source?: AttributeMappingSource | undefined;
    /** Name of the attribute on the target object. */
    private _targetAttributeName?: string | undefined;
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
     * Instantiates a new attributeMapping and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the defaultValue property value. Default value to be used in case the source property was evaluated to null. Optional.
     * @returns a string
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Sets the defaultValue property value. Default value to be used in case the source property was evaluated to null. Optional.
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: string | undefined) {
        this._defaultValue = value;
    };
    /**
     * Gets the exportMissingReferences property value. For internal use only.
     * @returns a boolean
     */
    public get exportMissingReferences() {
        return this._exportMissingReferences;
    };
    /**
     * Sets the exportMissingReferences property value. For internal use only.
     * @param value Value to set for the exportMissingReferences property.
     */
    public set exportMissingReferences(value: boolean | undefined) {
        this._exportMissingReferences = value;
    };
    /**
     * Gets the flowBehavior property value. The flowBehavior property
     * @returns a attributeFlowBehavior
     */
    public get flowBehavior() {
        return this._flowBehavior;
    };
    /**
     * Sets the flowBehavior property value. The flowBehavior property
     * @param value Value to set for the flowBehavior property.
     */
    public set flowBehavior(value: AttributeFlowBehavior | undefined) {
        this._flowBehavior = value;
    };
    /**
     * Gets the flowType property value. The flowType property
     * @returns a attributeFlowType
     */
    public get flowType() {
        return this._flowType;
    };
    /**
     * Sets the flowType property value. The flowType property
     * @param value Value to set for the flowType property.
     */
    public set flowType(value: AttributeFlowType | undefined) {
        this._flowType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "defaultValue": n => { this.defaultValue = n.getStringValue(); },
            "exportMissingReferences": n => { this.exportMissingReferences = n.getBooleanValue(); },
            "flowBehavior": n => { this.flowBehavior = n.getEnumValue<AttributeFlowBehavior>(AttributeFlowBehavior); },
            "flowType": n => { this.flowType = n.getEnumValue<AttributeFlowType>(AttributeFlowType); },
            "matchingPriority": n => { this.matchingPriority = n.getNumberValue(); },
            "source": n => { this.source = n.getObjectValue<AttributeMappingSource>(createAttributeMappingSourceFromDiscriminatorValue); },
            "targetAttributeName": n => { this.targetAttributeName = n.getStringValue(); },
        };
    };
    /**
     * Gets the matchingPriority property value. If higher than 0, this attribute will be used to perform an initial match of the objects between source and target directories. The synchronization engine will try to find the matching object using attribute with lowest value of matching priority first. If not found, the attribute with the next matching priority will be used, and so on a until match is found or no more matching attributes are left. Only attributes that are expected to have unique values, such as email, should be used as matching attributes.
     * @returns a integer
     */
    public get matchingPriority() {
        return this._matchingPriority;
    };
    /**
     * Sets the matchingPriority property value. If higher than 0, this attribute will be used to perform an initial match of the objects between source and target directories. The synchronization engine will try to find the matching object using attribute with lowest value of matching priority first. If not found, the attribute with the next matching priority will be used, and so on a until match is found or no more matching attributes are left. Only attributes that are expected to have unique values, such as email, should be used as matching attributes.
     * @param value Value to set for the matchingPriority property.
     */
    public set matchingPriority(value: number | undefined) {
        this._matchingPriority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("defaultValue", this.defaultValue);
        writer.writeBooleanValue("exportMissingReferences", this.exportMissingReferences);
        writer.writeEnumValue<AttributeFlowBehavior>("flowBehavior", this.flowBehavior);
        writer.writeEnumValue<AttributeFlowType>("flowType", this.flowType);
        writer.writeNumberValue("matchingPriority", this.matchingPriority);
        writer.writeObjectValue<AttributeMappingSource>("source", this.source);
        writer.writeStringValue("targetAttributeName", this.targetAttributeName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source property value. The source property
     * @returns a attributeMappingSource
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: AttributeMappingSource | undefined) {
        this._source = value;
    };
    /**
     * Gets the targetAttributeName property value. Name of the attribute on the target object.
     * @returns a string
     */
    public get targetAttributeName() {
        return this._targetAttributeName;
    };
    /**
     * Sets the targetAttributeName property value. Name of the attribute on the target object.
     * @param value Value to set for the targetAttributeName property.
     */
    public set targetAttributeName(value: string | undefined) {
        this._targetAttributeName = value;
    };
}
