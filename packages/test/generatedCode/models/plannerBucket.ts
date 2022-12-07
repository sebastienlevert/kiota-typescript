import {createPlannerBucketCreationFromDiscriminatorValue} from './createPlannerBucketCreationFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {PlannerBucketCreation, PlannerDelta, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerBucket extends PlannerDelta implements Parsable {
    /** The creationSource property */
    private _creationSource?: PlannerBucketCreation | undefined;
    /** Name of the bucket. */
    private _name?: string | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    private _orderHint?: string | undefined;
    /** Plan ID to which the bucket belongs. */
    private _planId?: string | undefined;
    /** Read-only. Nullable. The collection of tasks in the bucket. */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerBucket and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the creationSource property value. The creationSource property
     * @returns a plannerBucketCreation
     */
    public get creationSource() {
        return this._creationSource;
    };
    /**
     * Sets the creationSource property value. The creationSource property
     * @param value Value to set for the creationSource property.
     */
    public set creationSource(value: PlannerBucketCreation | undefined) {
        this._creationSource = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "creationSource": n => { this.creationSource = n.getObjectValue<PlannerBucketCreation>(createPlannerBucketCreationFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "orderHint": n => { this.orderHint = n.getStringValue(); },
            "planId": n => { this.planId = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. Name of the bucket.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the bucket.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Sets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        this._orderHint = value;
    };
    /**
     * Gets the planId property value. Plan ID to which the bucket belongs.
     * @returns a string
     */
    public get planId() {
        return this._planId;
    };
    /**
     * Sets the planId property value. Plan ID to which the bucket belongs.
     * @param value Value to set for the planId property.
     */
    public set planId(value: string | undefined) {
        this._planId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerBucketCreation>("creationSource", this.creationSource);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("orderHint", this.orderHint);
        writer.writeStringValue("planId", this.planId);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
