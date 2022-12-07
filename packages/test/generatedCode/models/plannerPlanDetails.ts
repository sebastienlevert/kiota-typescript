import {createPlannerCategoryDescriptionsFromDiscriminatorValue} from './createPlannerCategoryDescriptionsFromDiscriminatorValue';
import {createPlannerPlanContextDetailsCollectionFromDiscriminatorValue} from './createPlannerPlanContextDetailsCollectionFromDiscriminatorValue';
import {createPlannerUserIdsFromDiscriminatorValue} from './createPlannerUserIdsFromDiscriminatorValue';
import {PlannerCategoryDescriptions, PlannerDelta, PlannerPlanContextDetailsCollection, PlannerUserIds} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanDetails extends PlannerDelta implements Parsable {
    /** The categoryDescriptions property */
    private _categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /** The contextDetails property */
    private _contextDetails?: PlannerPlanContextDetailsCollection | undefined;
    /** The sharedWith property */
    private _sharedWith?: PlannerUserIds | undefined;
    /**
     * Gets the categoryDescriptions property value. The categoryDescriptions property
     * @returns a plannerCategoryDescriptions
     */
    public get categoryDescriptions() {
        return this._categoryDescriptions;
    };
    /**
     * Sets the categoryDescriptions property value. The categoryDescriptions property
     * @param value Value to set for the categoryDescriptions property.
     */
    public set categoryDescriptions(value: PlannerCategoryDescriptions | undefined) {
        this._categoryDescriptions = value;
    };
    /**
     * Instantiates a new plannerPlanDetails and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contextDetails property value. The contextDetails property
     * @returns a plannerPlanContextDetailsCollection
     */
    public get contextDetails() {
        return this._contextDetails;
    };
    /**
     * Sets the contextDetails property value. The contextDetails property
     * @param value Value to set for the contextDetails property.
     */
    public set contextDetails(value: PlannerPlanContextDetailsCollection | undefined) {
        this._contextDetails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categoryDescriptions": n => { this.categoryDescriptions = n.getObjectValue<PlannerCategoryDescriptions>(createPlannerCategoryDescriptionsFromDiscriminatorValue); },
            "contextDetails": n => { this.contextDetails = n.getObjectValue<PlannerPlanContextDetailsCollection>(createPlannerPlanContextDetailsCollectionFromDiscriminatorValue); },
            "sharedWith": n => { this.sharedWith = n.getObjectValue<PlannerUserIds>(createPlannerUserIdsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerCategoryDescriptions>("categoryDescriptions", this.categoryDescriptions);
        writer.writeObjectValue<PlannerPlanContextDetailsCollection>("contextDetails", this.contextDetails);
        writer.writeObjectValue<PlannerUserIds>("sharedWith", this.sharedWith);
    };
    /**
     * Gets the sharedWith property value. The sharedWith property
     * @returns a plannerUserIds
     */
    public get sharedWith() {
        return this._sharedWith;
    };
    /**
     * Sets the sharedWith property value. The sharedWith property
     * @param value Value to set for the sharedWith property.
     */
    public set sharedWith(value: PlannerUserIds | undefined) {
        this._sharedWith = value;
    };
}
