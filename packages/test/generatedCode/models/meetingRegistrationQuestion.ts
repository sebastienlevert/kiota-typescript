import {AnswerInputType} from './answerInputType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingRegistrationQuestion extends Entity implements Parsable {
    /** The answerInputType property */
    private _answerInputType?: AnswerInputType | undefined;
    /** Answer options when answerInputType is radioButton. */
    private _answerOptions?: string[] | undefined;
    /** Display name of the custom registration question. */
    private _displayName?: string | undefined;
    /** Indicates whether the question is required. Default value is false. */
    private _isRequired?: boolean | undefined;
    /**
     * Gets the answerInputType property value. The answerInputType property
     * @returns a answerInputType
     */
    public get answerInputType() {
        return this._answerInputType;
    };
    /**
     * Sets the answerInputType property value. The answerInputType property
     * @param value Value to set for the answerInputType property.
     */
    public set answerInputType(value: AnswerInputType | undefined) {
        this._answerInputType = value;
    };
    /**
     * Gets the answerOptions property value. Answer options when answerInputType is radioButton.
     * @returns a string
     */
    public get answerOptions() {
        return this._answerOptions;
    };
    /**
     * Sets the answerOptions property value. Answer options when answerInputType is radioButton.
     * @param value Value to set for the answerOptions property.
     */
    public set answerOptions(value: string[] | undefined) {
        this._answerOptions = value;
    };
    /**
     * Instantiates a new meetingRegistrationQuestion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of the custom registration question.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the custom registration question.
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
            "answerInputType": n => { this.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); },
            "answerOptions": n => { this.answerOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isRequired property value. Indicates whether the question is required. Default value is false.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Sets the isRequired property value. Indicates whether the question is required. Default value is false.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AnswerInputType>("answerInputType", this.answerInputType);
        writer.writeCollectionOfPrimitiveValues<string>("answerOptions", this.answerOptions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isRequired", this.isRequired);
    };
}
