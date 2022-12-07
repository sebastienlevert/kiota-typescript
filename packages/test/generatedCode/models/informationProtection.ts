import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createDataLossPreventionPolicyFromDiscriminatorValue} from './createDataLossPreventionPolicyFromDiscriminatorValue';
import {createInformationProtectionPolicyFromDiscriminatorValue} from './createInformationProtectionPolicyFromDiscriminatorValue';
import {createSensitivityLabelFromDiscriminatorValue} from './createSensitivityLabelFromDiscriminatorValue';
import {createSensitivityPolicySettingsFromDiscriminatorValue} from './createSensitivityPolicySettingsFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {Bitlocker, DataLossPreventionPolicy, Entity, InformationProtectionPolicy, SensitivityLabel, SensitivityPolicySettings, ThreatAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtection extends Entity implements Parsable {
    /** The bitlocker property */
    private _bitlocker?: Bitlocker | undefined;
    /** The dataLossPreventionPolicies property */
    private _dataLossPreventionPolicies?: DataLossPreventionPolicy[] | undefined;
    /** The policy property */
    private _policy?: InformationProtectionPolicy | undefined;
    /** The sensitivityLabels property */
    private _sensitivityLabels?: SensitivityLabel[] | undefined;
    /** The sensitivityPolicySettings property */
    private _sensitivityPolicySettings?: SensitivityPolicySettings | undefined;
    /** The threatAssessmentRequests property */
    private _threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
    /**
     * Gets the bitlocker property value. The bitlocker property
     * @returns a bitlocker
     */
    public get bitlocker() {
        return this._bitlocker;
    };
    /**
     * Sets the bitlocker property value. The bitlocker property
     * @param value Value to set for the bitlocker property.
     */
    public set bitlocker(value: Bitlocker | undefined) {
        this._bitlocker = value;
    };
    /**
     * Instantiates a new informationProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dataLossPreventionPolicies property value. The dataLossPreventionPolicies property
     * @returns a dataLossPreventionPolicy
     */
    public get dataLossPreventionPolicies() {
        return this._dataLossPreventionPolicies;
    };
    /**
     * Sets the dataLossPreventionPolicies property value. The dataLossPreventionPolicies property
     * @param value Value to set for the dataLossPreventionPolicies property.
     */
    public set dataLossPreventionPolicies(value: DataLossPreventionPolicy[] | undefined) {
        this._dataLossPreventionPolicies = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bitlocker": n => { this.bitlocker = n.getObjectValue<Bitlocker>(createBitlockerFromDiscriminatorValue); },
            "dataLossPreventionPolicies": n => { this.dataLossPreventionPolicies = n.getCollectionOfObjectValues<DataLossPreventionPolicy>(createDataLossPreventionPolicyFromDiscriminatorValue); },
            "policy": n => { this.policy = n.getObjectValue<InformationProtectionPolicy>(createInformationProtectionPolicyFromDiscriminatorValue); },
            "sensitivityLabels": n => { this.sensitivityLabels = n.getCollectionOfObjectValues<SensitivityLabel>(createSensitivityLabelFromDiscriminatorValue); },
            "sensitivityPolicySettings": n => { this.sensitivityPolicySettings = n.getObjectValue<SensitivityPolicySettings>(createSensitivityPolicySettingsFromDiscriminatorValue); },
            "threatAssessmentRequests": n => { this.threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the policy property value. The policy property
     * @returns a informationProtectionPolicy
     */
    public get policy() {
        return this._policy;
    };
    /**
     * Sets the policy property value. The policy property
     * @param value Value to set for the policy property.
     */
    public set policy(value: InformationProtectionPolicy | undefined) {
        this._policy = value;
    };
    /**
     * Gets the sensitivityLabels property value. The sensitivityLabels property
     * @returns a sensitivityLabel
     */
    public get sensitivityLabels() {
        return this._sensitivityLabels;
    };
    /**
     * Sets the sensitivityLabels property value. The sensitivityLabels property
     * @param value Value to set for the sensitivityLabels property.
     */
    public set sensitivityLabels(value: SensitivityLabel[] | undefined) {
        this._sensitivityLabels = value;
    };
    /**
     * Gets the sensitivityPolicySettings property value. The sensitivityPolicySettings property
     * @returns a sensitivityPolicySettings
     */
    public get sensitivityPolicySettings() {
        return this._sensitivityPolicySettings;
    };
    /**
     * Sets the sensitivityPolicySettings property value. The sensitivityPolicySettings property
     * @param value Value to set for the sensitivityPolicySettings property.
     */
    public set sensitivityPolicySettings(value: SensitivityPolicySettings | undefined) {
        this._sensitivityPolicySettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Bitlocker>("bitlocker", this.bitlocker);
        writer.writeCollectionOfObjectValues<DataLossPreventionPolicy>("dataLossPreventionPolicies", this.dataLossPreventionPolicies);
        writer.writeObjectValue<InformationProtectionPolicy>("policy", this.policy);
        writer.writeCollectionOfObjectValues<SensitivityLabel>("sensitivityLabels", this.sensitivityLabels);
        writer.writeObjectValue<SensitivityPolicySettings>("sensitivityPolicySettings", this.sensitivityPolicySettings);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", this.threatAssessmentRequests);
    };
    /**
     * Gets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @returns a threatAssessmentRequest
     */
    public get threatAssessmentRequests() {
        return this._threatAssessmentRequests;
    };
    /**
     * Sets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @param value Value to set for the threatAssessmentRequests property.
     */
    public set threatAssessmentRequests(value: ThreatAssessmentRequest[] | undefined) {
        this._threatAssessmentRequests = value;
    };
}
