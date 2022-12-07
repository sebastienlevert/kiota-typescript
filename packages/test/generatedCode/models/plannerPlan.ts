import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanContainerFromDiscriminatorValue} from './createPlannerPlanContainerFromDiscriminatorValue';
import {createPlannerPlanContextCollectionFromDiscriminatorValue} from './createPlannerPlanContextCollectionFromDiscriminatorValue';
import {createPlannerPlanCreationFromDiscriminatorValue} from './createPlannerPlanCreationFromDiscriminatorValue';
import {createPlannerPlanDetailsFromDiscriminatorValue} from './createPlannerPlanDetailsFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {IdentitySet, PlannerBucket, PlannerDelta, PlannerPlanContainer, PlannerPlanContextCollection, PlannerPlanCreation, PlannerPlanDetails, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlan extends PlannerDelta implements Parsable {
    /** Collection of buckets in the plan. Read-only. Nullable. */
    private _buckets?: PlannerBucket[] | undefined;
    /** The container property */
    private _container?: PlannerPlanContainer | undefined;
    /** The contexts property */
    private _contexts?: PlannerPlanContextCollection | undefined;
    /** The createdBy property */
    private _createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** The creationSource property */
    private _creationSource?: PlannerPlanCreation | undefined;
    /** The details property */
    private _details?: PlannerPlanDetails | undefined;
    /** The owner property */
    private _owner?: string | undefined;
    /** Collection of tasks in the plan. Read-only. Nullable. */
    private _tasks?: PlannerTask[] | undefined;
    /** Required. Title of the plan. */
    private _title?: string | undefined;
    /**
     * Gets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @returns a plannerBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Instantiates a new plannerPlan and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the container property value. The container property
     * @returns a plannerPlanContainer
     */
    public get container() {
        return this._container;
    };
    /**
     * Sets the container property value. The container property
     * @param value Value to set for the container property.
     */
    public set container(value: PlannerPlanContainer | undefined) {
        this._container = value;
    };
    /**
     * Gets the contexts property value. The contexts property
     * @returns a plannerPlanContextCollection
     */
    public get contexts() {
        return this._contexts;
    };
    /**
     * Sets the contexts property value. The contexts property
     * @param value Value to set for the contexts property.
     */
    public set contexts(value: PlannerPlanContextCollection | undefined) {
        this._contexts = value;
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the creationSource property value. The creationSource property
     * @returns a plannerPlanCreation
     */
    public get creationSource() {
        return this._creationSource;
    };
    /**
     * Sets the creationSource property value. The creationSource property
     * @param value Value to set for the creationSource property.
     */
    public set creationSource(value: PlannerPlanCreation | undefined) {
        this._creationSource = value;
    };
    /**
     * Gets the details property value. The details property
     * @returns a plannerPlanDetails
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The details property
     * @param value Value to set for the details property.
     */
    public set details(value: PlannerPlanDetails | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); },
            "container": n => { this.container = n.getObjectValue<PlannerPlanContainer>(createPlannerPlanContainerFromDiscriminatorValue); },
            "contexts": n => { this.contexts = n.getObjectValue<PlannerPlanContextCollection>(createPlannerPlanContextCollectionFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "creationSource": n => { this.creationSource = n.getObjectValue<PlannerPlanCreation>(createPlannerPlanCreationFromDiscriminatorValue); },
            "details": n => { this.details = n.getObjectValue<PlannerPlanDetails>(createPlannerPlanDetailsFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the owner property value. The owner property
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner property
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        this._owner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", this.buckets);
        writer.writeObjectValue<PlannerPlanContainer>("container", this.container);
        writer.writeObjectValue<PlannerPlanContextCollection>("contexts", this.contexts);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PlannerPlanCreation>("creationSource", this.creationSource);
        writer.writeObjectValue<PlannerPlanDetails>("details", this.details);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
    /**
     * Gets the title property value. Required. Title of the plan.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Required. Title of the plan.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
