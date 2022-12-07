import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordSingleSignOnField implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Title/label override for customization. */
    private _customizedLabel?: string | undefined;
    /** Label that would be used if no customizedLabel is provided. Read only. */
    private _defaultLabel?: string | undefined;
    /** Id used to identity the field type. This is an internal id and possible values are param_1, param_2, param_userName, param_password. */
    private _fieldId?: string | undefined;
    /** Type of the credential. The values can be text, password. */
    private _type?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new passwordSingleSignOnField and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customizedLabel property value. Title/label override for customization.
     * @returns a string
     */
    public get customizedLabel() {
        return this._customizedLabel;
    };
    /**
     * Sets the customizedLabel property value. Title/label override for customization.
     * @param value Value to set for the customizedLabel property.
     */
    public set customizedLabel(value: string | undefined) {
        this._customizedLabel = value;
    };
    /**
     * Gets the defaultLabel property value. Label that would be used if no customizedLabel is provided. Read only.
     * @returns a string
     */
    public get defaultLabel() {
        return this._defaultLabel;
    };
    /**
     * Sets the defaultLabel property value. Label that would be used if no customizedLabel is provided. Read only.
     * @param value Value to set for the defaultLabel property.
     */
    public set defaultLabel(value: string | undefined) {
        this._defaultLabel = value;
    };
    /**
     * Gets the fieldId property value. Id used to identity the field type. This is an internal id and possible values are param_1, param_2, param_userName, param_password.
     * @returns a string
     */
    public get fieldId() {
        return this._fieldId;
    };
    /**
     * Sets the fieldId property value. Id used to identity the field type. This is an internal id and possible values are param_1, param_2, param_userName, param_password.
     * @param value Value to set for the fieldId property.
     */
    public set fieldId(value: string | undefined) {
        this._fieldId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "customizedLabel": n => { this.customizedLabel = n.getStringValue(); },
            "defaultLabel": n => { this.defaultLabel = n.getStringValue(); },
            "fieldId": n => { this.fieldId = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("customizedLabel", this.customizedLabel);
        writer.writeStringValue("defaultLabel", this.defaultLabel);
        writer.writeStringValue("fieldId", this.fieldId);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Type of the credential. The values can be text, password.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of the credential. The values can be text, password.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
