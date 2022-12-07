import {Entity} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SensitivityPolicySettings extends Entity implements Parsable {
    /** The applicableTo property */
    private _applicableTo?: SensitivityLabelTarget | undefined;
    /** The downgradeSensitivityRequiresJustification property */
    private _downgradeSensitivityRequiresJustification?: boolean | undefined;
    /** The helpWebUrl property */
    private _helpWebUrl?: string | undefined;
    /** The isMandatory property */
    private _isMandatory?: boolean | undefined;
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
     * Instantiates a new sensitivityPolicySettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the downgradeSensitivityRequiresJustification property value. The downgradeSensitivityRequiresJustification property
     * @returns a boolean
     */
    public get downgradeSensitivityRequiresJustification() {
        return this._downgradeSensitivityRequiresJustification;
    };
    /**
     * Sets the downgradeSensitivityRequiresJustification property value. The downgradeSensitivityRequiresJustification property
     * @param value Value to set for the downgradeSensitivityRequiresJustification property.
     */
    public set downgradeSensitivityRequiresJustification(value: boolean | undefined) {
        this._downgradeSensitivityRequiresJustification = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableTo": n => { this.applicableTo = n.getEnumValue<SensitivityLabelTarget>(SensitivityLabelTarget); },
            "downgradeSensitivityRequiresJustification": n => { this.downgradeSensitivityRequiresJustification = n.getBooleanValue(); },
            "helpWebUrl": n => { this.helpWebUrl = n.getStringValue(); },
            "isMandatory": n => { this.isMandatory = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the helpWebUrl property value. The helpWebUrl property
     * @returns a string
     */
    public get helpWebUrl() {
        return this._helpWebUrl;
    };
    /**
     * Sets the helpWebUrl property value. The helpWebUrl property
     * @param value Value to set for the helpWebUrl property.
     */
    public set helpWebUrl(value: string | undefined) {
        this._helpWebUrl = value;
    };
    /**
     * Gets the isMandatory property value. The isMandatory property
     * @returns a boolean
     */
    public get isMandatory() {
        return this._isMandatory;
    };
    /**
     * Sets the isMandatory property value. The isMandatory property
     * @param value Value to set for the isMandatory property.
     */
    public set isMandatory(value: boolean | undefined) {
        this._isMandatory = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<SensitivityLabelTarget>("applicableTo", this.applicableTo);
        writer.writeBooleanValue("downgradeSensitivityRequiresJustification", this.downgradeSensitivityRequiresJustification);
        writer.writeStringValue("helpWebUrl", this.helpWebUrl);
        writer.writeBooleanValue("isMandatory", this.isMandatory);
    };
}
