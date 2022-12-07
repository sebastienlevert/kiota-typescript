import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createPlannerChecklistItemsFromDiscriminatorValue} from './createPlannerChecklistItemsFromDiscriminatorValue';
import {createPlannerExternalReferencesFromDiscriminatorValue} from './createPlannerExternalReferencesFromDiscriminatorValue';
import {ItemBody, PlannerChecklistItems, PlannerDelta, PlannerExternalReferences} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerTaskDetails extends PlannerDelta implements Parsable {
    /** The checklist property */
    private _checklist?: PlannerChecklistItems | undefined;
    /** Description of the task. */
    private _description?: string | undefined;
    /** The notes property */
    private _notes?: ItemBody | undefined;
    /** The previewType property */
    private _previewType?: PlannerPreviewType | undefined;
    /** The references property */
    private _references?: PlannerExternalReferences | undefined;
    /**
     * Gets the checklist property value. The checklist property
     * @returns a plannerChecklistItems
     */
    public get checklist() {
        return this._checklist;
    };
    /**
     * Sets the checklist property value. The checklist property
     * @param value Value to set for the checklist property.
     */
    public set checklist(value: PlannerChecklistItems | undefined) {
        this._checklist = value;
    };
    /**
     * Instantiates a new plannerTaskDetails and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the task.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the task.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "checklist": n => { this.checklist = n.getObjectValue<PlannerChecklistItems>(createPlannerChecklistItemsFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "notes": n => { this.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "previewType": n => { this.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
            "references": n => { this.references = n.getObjectValue<PlannerExternalReferences>(createPlannerExternalReferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the notes property value. The notes property
     * @returns a itemBody
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. The notes property
     * @param value Value to set for the notes property.
     */
    public set notes(value: ItemBody | undefined) {
        this._notes = value;
    };
    /**
     * Gets the previewType property value. The previewType property
     * @returns a plannerPreviewType
     */
    public get previewType() {
        return this._previewType;
    };
    /**
     * Sets the previewType property value. The previewType property
     * @param value Value to set for the previewType property.
     */
    public set previewType(value: PlannerPreviewType | undefined) {
        this._previewType = value;
    };
    /**
     * Gets the references property value. The references property
     * @returns a plannerExternalReferences
     */
    public get references() {
        return this._references;
    };
    /**
     * Sets the references property value. The references property
     * @param value Value to set for the references property.
     */
    public set references(value: PlannerExternalReferences | undefined) {
        this._references = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerChecklistItems>("checklist", this.checklist);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<ItemBody>("notes", this.notes);
        writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        writer.writeObjectValue<PlannerExternalReferences>("references", this.references);
    };
}
