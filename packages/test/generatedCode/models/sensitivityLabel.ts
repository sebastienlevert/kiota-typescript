import {ApplicationMode} from './applicationMode';
import {createAutoLabelingFromDiscriminatorValue} from './createAutoLabelingFromDiscriminatorValue';
import {createLabelActionBaseFromDiscriminatorValue} from './createLabelActionBaseFromDiscriminatorValue';
import {createLabelPolicyFromDiscriminatorValue} from './createLabelPolicyFromDiscriminatorValue';
import {createSensitivityLabelFromDiscriminatorValue} from './createSensitivityLabelFromDiscriminatorValue';
import {AutoLabeling, Entity, LabelActionBase, LabelPolicy} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SensitivityLabel extends Entity implements Parsable {
    /** The applicableTo property */
    private _applicableTo?: SensitivityLabelTarget | undefined;
    /** The applicationMode property */
    private _applicationMode?: ApplicationMode | undefined;
    /** The assignedPolicies property */
    private _assignedPolicies?: LabelPolicy[] | undefined;
    /** The autoLabeling property */
    private _autoLabeling?: AutoLabeling | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The isDefault property */
    private _isDefault?: boolean | undefined;
    /** The isEndpointProtectionEnabled property */
    private _isEndpointProtectionEnabled?: boolean | undefined;
    /** The labelActions property */
    private _labelActions?: LabelActionBase[] | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The priority property */
    private _priority?: number | undefined;
    /** The sublabels property */
    private _sublabels?: SensitivityLabel[] | undefined;
    /** The toolTip property */
    private _toolTip?: string | undefined;
    /**
     * Gets the applicableTo property value. The applicableTo property
     * @returns a sensitivityLabelTarget
     */
    public get applicableTo() {
        return this._applicableTo;
    };
    /**
     * Sets the applicableTo property value. The applicableTo property
     * @param value Value to set for the applicableTo property.
     */
    public set applicableTo(value: SensitivityLabelTarget | undefined) {
        this._applicableTo = value;
    };
    /**
     * Gets the applicationMode property value. The applicationMode property
     * @returns a applicationMode
     */
    public get applicationMode() {
        return this._applicationMode;
    };
    /**
     * Sets the applicationMode property value. The applicationMode property
     * @param value Value to set for the applicationMode property.
     */
    public set applicationMode(value: ApplicationMode | undefined) {
        this._applicationMode = value;
    };
    /**
     * Gets the assignedPolicies property value. The assignedPolicies property
     * @returns a labelPolicy
     */
    public get assignedPolicies() {
        return this._assignedPolicies;
    };
    /**
     * Sets the assignedPolicies property value. The assignedPolicies property
     * @param value Value to set for the assignedPolicies property.
     */
    public set assignedPolicies(value: LabelPolicy[] | undefined) {
        this._assignedPolicies = value;
    };
    /**
     * Gets the autoLabeling property value. The autoLabeling property
     * @returns a autoLabeling
     */
    public get autoLabeling() {
        return this._autoLabeling;
    };
    /**
     * Sets the autoLabeling property value. The autoLabeling property
     * @param value Value to set for the autoLabeling property.
     */
    public set autoLabeling(value: AutoLabeling | undefined) {
        this._autoLabeling = value;
    };
    /**
     * Instantiates a new sensitivityLabel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableTo": n => { this.applicableTo = n.getEnumValue<SensitivityLabelTarget>(SensitivityLabelTarget); },
            "applicationMode": n => { this.applicationMode = n.getEnumValue<ApplicationMode>(ApplicationMode); },
            "assignedPolicies": n => { this.assignedPolicies = n.getCollectionOfObjectValues<LabelPolicy>(createLabelPolicyFromDiscriminatorValue); },
            "autoLabeling": n => { this.autoLabeling = n.getObjectValue<AutoLabeling>(createAutoLabelingFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isEndpointProtectionEnabled": n => { this.isEndpointProtectionEnabled = n.getBooleanValue(); },
            "labelActions": n => { this.labelActions = n.getCollectionOfObjectValues<LabelActionBase>(createLabelActionBaseFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "sublabels": n => { this.sublabels = n.getCollectionOfObjectValues<SensitivityLabel>(createSensitivityLabelFromDiscriminatorValue); },
            "toolTip": n => { this.toolTip = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. The isDefault property
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. The isDefault property
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isEndpointProtectionEnabled property value. The isEndpointProtectionEnabled property
     * @returns a boolean
     */
    public get isEndpointProtectionEnabled() {
        return this._isEndpointProtectionEnabled;
    };
    /**
     * Sets the isEndpointProtectionEnabled property value. The isEndpointProtectionEnabled property
     * @param value Value to set for the isEndpointProtectionEnabled property.
     */
    public set isEndpointProtectionEnabled(value: boolean | undefined) {
        this._isEndpointProtectionEnabled = value;
    };
    /**
     * Gets the labelActions property value. The labelActions property
     * @returns a labelActionBase
     */
    public get labelActions() {
        return this._labelActions;
    };
    /**
     * Sets the labelActions property value. The labelActions property
     * @param value Value to set for the labelActions property.
     */
    public set labelActions(value: LabelActionBase[] | undefined) {
        this._labelActions = value;
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
     * Gets the priority property value. The priority property
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. The priority property
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<SensitivityLabelTarget>("applicableTo", this.applicableTo);
        writer.writeEnumValue<ApplicationMode>("applicationMode", this.applicationMode);
        writer.writeCollectionOfObjectValues<LabelPolicy>("assignedPolicies", this.assignedPolicies);
        writer.writeObjectValue<AutoLabeling>("autoLabeling", this.autoLabeling);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isEndpointProtectionEnabled", this.isEndpointProtectionEnabled);
        writer.writeCollectionOfObjectValues<LabelActionBase>("labelActions", this.labelActions);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("priority", this.priority);
        writer.writeCollectionOfObjectValues<SensitivityLabel>("sublabels", this.sublabels);
        writer.writeStringValue("toolTip", this.toolTip);
    };
    /**
     * Gets the sublabels property value. The sublabels property
     * @returns a sensitivityLabel
     */
    public get sublabels() {
        return this._sublabels;
    };
    /**
     * Sets the sublabels property value. The sublabels property
     * @param value Value to set for the sublabels property.
     */
    public set sublabels(value: SensitivityLabel[] | undefined) {
        this._sublabels = value;
    };
    /**
     * Gets the toolTip property value. The toolTip property
     * @returns a string
     */
    public get toolTip() {
        return this._toolTip;
    };
    /**
     * Sets the toolTip property value. The toolTip property
     * @param value Value to set for the toolTip property.
     */
    public set toolTip(value: string | undefined) {
        this._toolTip = value;
    };
}
