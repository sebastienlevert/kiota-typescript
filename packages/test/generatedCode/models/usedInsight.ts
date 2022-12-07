import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createUsageDetailsFromDiscriminatorValue} from './createUsageDetailsFromDiscriminatorValue';
import {Entity, ResourceReference, ResourceVisualization, UsageDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UsedInsight extends Entity implements Parsable {
    /** The lastUsed property */
    private _lastUsed?: UsageDetails | undefined;
    /** The resource property */
    private _resource?: Entity | undefined;
    /** The resourceReference property */
    private _resourceReference?: ResourceReference | undefined;
    /** The resourceVisualization property */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /**
     * Instantiates a new usedInsight and sets the default values.
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
            "lastUsed": n => { this.lastUsed = n.getObjectValue<UsageDetails>(createUsageDetailsFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastUsed property value. The lastUsed property
     * @returns a usageDetails
     */
    public get lastUsed() {
        return this._lastUsed;
    };
    /**
     * Sets the lastUsed property value. The lastUsed property
     * @param value Value to set for the lastUsed property.
     */
    public set lastUsed(value: UsageDetails | undefined) {
        this._lastUsed = value;
    };
    /**
     * Gets the resource property value. The resource property
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. The resource property
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceReference property value. The resourceReference property
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. The resourceReference property
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Gets the resourceVisualization property value. The resourceVisualization property
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. The resourceVisualization property
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UsageDetails>("lastUsed", this.lastUsed);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeObjectValue<ResourceReference>("resourceReference", this.resourceReference);
        writer.writeObjectValue<ResourceVisualization>("resourceVisualization", this.resourceVisualization);
    };
}
