import {Entity} from '../';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtectionPolicySetting extends Entity implements Parsable {
    /** The defaultLabelId property */
    private _defaultLabelId?: string | undefined;
    /** Exposes whether justification input is required on label downgrade. */
    private _isDowngradeJustificationRequired?: boolean | undefined;
    /** Exposes whether mandatory labeling is enabled. */
    private _isMandatory?: boolean | undefined;
    /** Exposes the more information URL that can be configured by the administrator. */
    private _moreInfoUrl?: string | undefined;
    /**
     * Instantiates a new informationProtectionPolicySetting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultLabelId property value. The defaultLabelId property
     * @returns a string
     */
    public get defaultLabelId() {
        return this._defaultLabelId;
    };
    /**
     * Sets the defaultLabelId property value. The defaultLabelId property
     * @param value Value to set for the defaultLabelId property.
     */
    public set defaultLabelId(value: string | undefined) {
        this._defaultLabelId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultLabelId": n => { this.defaultLabelId = n.getStringValue(); },
            "isDowngradeJustificationRequired": n => { this.isDowngradeJustificationRequired = n.getBooleanValue(); },
            "isMandatory": n => { this.isMandatory = n.getBooleanValue(); },
            "moreInfoUrl": n => { this.moreInfoUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDowngradeJustificationRequired property value. Exposes whether justification input is required on label downgrade.
     * @returns a boolean
     */
    public get isDowngradeJustificationRequired() {
        return this._isDowngradeJustificationRequired;
    };
    /**
     * Sets the isDowngradeJustificationRequired property value. Exposes whether justification input is required on label downgrade.
     * @param value Value to set for the isDowngradeJustificationRequired property.
     */
    public set isDowngradeJustificationRequired(value: boolean | undefined) {
        this._isDowngradeJustificationRequired = value;
    };
    /**
     * Gets the isMandatory property value. Exposes whether mandatory labeling is enabled.
     * @returns a boolean
     */
    public get isMandatory() {
        return this._isMandatory;
    };
    /**
     * Sets the isMandatory property value. Exposes whether mandatory labeling is enabled.
     * @param value Value to set for the isMandatory property.
     */
    public set isMandatory(value: boolean | undefined) {
        this._isMandatory = value;
    };
    /**
     * Gets the moreInfoUrl property value. Exposes the more information URL that can be configured by the administrator.
     * @returns a string
     */
    public get moreInfoUrl() {
        return this._moreInfoUrl;
    };
    /**
     * Sets the moreInfoUrl property value. Exposes the more information URL that can be configured by the administrator.
     * @param value Value to set for the moreInfoUrl property.
     */
    public set moreInfoUrl(value: string | undefined) {
        this._moreInfoUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("defaultLabelId", this.defaultLabelId);
        writer.writeBooleanValue("isDowngradeJustificationRequired", this.isDowngradeJustificationRequired);
        writer.writeBooleanValue("isMandatory", this.isMandatory);
        writer.writeStringValue("moreInfoUrl", this.moreInfoUrl);
    };
}
