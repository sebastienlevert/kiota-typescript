import {createPlannerDeltaFromDiscriminatorValue} from './createPlannerDeltaFromDiscriminatorValue';
import {createPlannerFavoritePlanReferenceCollectionFromDiscriminatorValue} from './createPlannerFavoritePlanReferenceCollectionFromDiscriminatorValue';
import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerRecentPlanReferenceCollectionFromDiscriminatorValue} from './createPlannerRecentPlanReferenceCollectionFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {PlannerDelta, PlannerFavoritePlanReferenceCollection, PlannerPlan, PlannerRecentPlanReferenceCollection, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerUser extends PlannerDelta implements Parsable {
    /** The all property */
    private _all?: PlannerDelta[] | undefined;
    /** The favoritePlanReferences property */
    private _favoritePlanReferences?: PlannerFavoritePlanReferenceCollection | undefined;
    /** Read-only. Nullable. Returns the plannerPlans that the user marked as favorites. */
    private _favoritePlans?: PlannerPlan[] | undefined;
    /** The plans property */
    private _plans?: PlannerPlan[] | undefined;
    /** The recentPlanReferences property */
    private _recentPlanReferences?: PlannerRecentPlanReferenceCollection | undefined;
    /** Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans. */
    private _recentPlans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member. */
    private _rosterPlans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Gets the all property value. The all property
     * @returns a plannerDelta
     */
    public get all() {
        return this._all;
    };
    /**
     * Sets the all property value. The all property
     * @param value Value to set for the all property.
     */
    public set all(value: PlannerDelta[] | undefined) {
        this._all = value;
    };
    /**
     * Instantiates a new plannerUser and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the favoritePlanReferences property value. The favoritePlanReferences property
     * @returns a plannerFavoritePlanReferenceCollection
     */
    public get favoritePlanReferences() {
        return this._favoritePlanReferences;
    };
    /**
     * Sets the favoritePlanReferences property value. The favoritePlanReferences property
     * @param value Value to set for the favoritePlanReferences property.
     */
    public set favoritePlanReferences(value: PlannerFavoritePlanReferenceCollection | undefined) {
        this._favoritePlanReferences = value;
    };
    /**
     * Gets the favoritePlans property value. Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
     * @returns a plannerPlan
     */
    public get favoritePlans() {
        return this._favoritePlans;
    };
    /**
     * Sets the favoritePlans property value. Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
     * @param value Value to set for the favoritePlans property.
     */
    public set favoritePlans(value: PlannerPlan[] | undefined) {
        this._favoritePlans = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "all": n => { this.all = n.getCollectionOfObjectValues<PlannerDelta>(createPlannerDeltaFromDiscriminatorValue); },
            "favoritePlanReferences": n => { this.favoritePlanReferences = n.getObjectValue<PlannerFavoritePlanReferenceCollection>(createPlannerFavoritePlanReferenceCollectionFromDiscriminatorValue); },
            "favoritePlans": n => { this.favoritePlans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
            "recentPlanReferences": n => { this.recentPlanReferences = n.getObjectValue<PlannerRecentPlanReferenceCollection>(createPlannerRecentPlanReferenceCollectionFromDiscriminatorValue); },
            "recentPlans": n => { this.recentPlans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
            "rosterPlans": n => { this.rosterPlans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the plans property value. The plans property
     * @returns a plannerPlan
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Sets the plans property value. The plans property
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        this._plans = value;
    };
    /**
     * Gets the recentPlanReferences property value. The recentPlanReferences property
     * @returns a plannerRecentPlanReferenceCollection
     */
    public get recentPlanReferences() {
        return this._recentPlanReferences;
    };
    /**
     * Sets the recentPlanReferences property value. The recentPlanReferences property
     * @param value Value to set for the recentPlanReferences property.
     */
    public set recentPlanReferences(value: PlannerRecentPlanReferenceCollection | undefined) {
        this._recentPlanReferences = value;
    };
    /**
     * Gets the recentPlans property value. Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans.
     * @returns a plannerPlan
     */
    public get recentPlans() {
        return this._recentPlans;
    };
    /**
     * Sets the recentPlans property value. Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans.
     * @param value Value to set for the recentPlans property.
     */
    public set recentPlans(value: PlannerPlan[] | undefined) {
        this._recentPlans = value;
    };
    /**
     * Gets the rosterPlans property value. Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
     * @returns a plannerPlan
     */
    public get rosterPlans() {
        return this._rosterPlans;
    };
    /**
     * Sets the rosterPlans property value. Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
     * @param value Value to set for the rosterPlans property.
     */
    public set rosterPlans(value: PlannerPlan[] | undefined) {
        this._rosterPlans = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerDelta>("all", this.all);
        writer.writeObjectValue<PlannerFavoritePlanReferenceCollection>("favoritePlanReferences", this.favoritePlanReferences);
        writer.writeCollectionOfObjectValues<PlannerPlan>("favoritePlans", this.favoritePlans);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", this.plans);
        writer.writeObjectValue<PlannerRecentPlanReferenceCollection>("recentPlanReferences", this.recentPlanReferences);
        writer.writeCollectionOfObjectValues<PlannerPlan>("recentPlans", this.recentPlans);
        writer.writeCollectionOfObjectValues<PlannerPlan>("rosterPlans", this.rosterPlans);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
