import {Entity} from '../';
import {createInformationProtectionPolicySettingFromDiscriminatorValue} from './createInformationProtectionPolicySettingFromDiscriminatorValue';
import {createSensitivityLabelFromDiscriminatorValue} from './createSensitivityLabelFromDiscriminatorValue';
import {InformationProtectionPolicySetting, SensitivityLabel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtection extends Entity implements Parsable {
    /** The labelPolicySettings property */
    private _labelPolicySettings?: InformationProtectionPolicySetting | undefined;
    /** Read the Microsoft Purview Information Protection labels for the user or organization. */
    private _sensitivityLabels?: SensitivityLabel[] | undefined;
    /**
     * Instantiates a new informationProtection and sets the default values.
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
            "labelPolicySettings": n => { this.labelPolicySettings = n.getObjectValue<InformationProtectionPolicySetting>(createInformationProtectionPolicySettingFromDiscriminatorValue); },
            "sensitivityLabels": n => { this.sensitivityLabels = n.getCollectionOfObjectValues<SensitivityLabel>(createSensitivityLabelFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the labelPolicySettings property value. The labelPolicySettings property
     * @returns a informationProtectionPolicySetting
     */
    public get labelPolicySettings() {
        return this._labelPolicySettings;
    };
    /**
     * Sets the labelPolicySettings property value. The labelPolicySettings property
     * @param value Value to set for the labelPolicySettings property.
     */
    public set labelPolicySettings(value: InformationProtectionPolicySetting | undefined) {
        this._labelPolicySettings = value;
    };
    /**
     * Gets the sensitivityLabels property value. Read the Microsoft Purview Information Protection labels for the user or organization.
     * @returns a sensitivityLabel
     */
    public get sensitivityLabels() {
        return this._sensitivityLabels;
    };
    /**
     * Sets the sensitivityLabels property value. Read the Microsoft Purview Information Protection labels for the user or organization.
     * @param value Value to set for the sensitivityLabels property.
     */
    public set sensitivityLabels(value: SensitivityLabel[] | undefined) {
        this._sensitivityLabels = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<InformationProtectionPolicySetting>("labelPolicySettings", this.labelPolicySettings);
        writer.writeCollectionOfObjectValues<SensitivityLabel>("sensitivityLabels", this.sensitivityLabels);
    };
}
