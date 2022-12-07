import {createEducationalActivityDetailFromDiscriminatorValue} from './createEducationalActivityDetailFromDiscriminatorValue';
import {createInstitutionDataFromDiscriminatorValue} from './createInstitutionDataFromDiscriminatorValue';
import {EducationalActivityDetail, InstitutionData, ItemFacet} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationalActivity extends ItemFacet implements Parsable {
    /** The month and year the user graduated or completed the activity. */
    private _completionMonthYear?: DateOnly | undefined;
    /** The month and year the user completed the educational activity referenced. */
    private _endMonthYear?: DateOnly | undefined;
    /** The institution property */
    private _institution?: InstitutionData | undefined;
    /** The program property */
    private _program?: EducationalActivityDetail | undefined;
    /** The month and year the user commenced the activity referenced. */
    private _startMonthYear?: DateOnly | undefined;
    /**
     * Gets the completionMonthYear property value. The month and year the user graduated or completed the activity.
     * @returns a DateOnly
     */
    public get completionMonthYear() {
        return this._completionMonthYear;
    };
    /**
     * Sets the completionMonthYear property value. The month and year the user graduated or completed the activity.
     * @param value Value to set for the completionMonthYear property.
     */
    public set completionMonthYear(value: DateOnly | undefined) {
        this._completionMonthYear = value;
    };
    /**
     * Instantiates a new educationalActivity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endMonthYear property value. The month and year the user completed the educational activity referenced.
     * @returns a DateOnly
     */
    public get endMonthYear() {
        return this._endMonthYear;
    };
    /**
     * Sets the endMonthYear property value. The month and year the user completed the educational activity referenced.
     * @param value Value to set for the endMonthYear property.
     */
    public set endMonthYear(value: DateOnly | undefined) {
        this._endMonthYear = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "completionMonthYear": n => { this.completionMonthYear = n.getDateOnlyValue(); },
            "endMonthYear": n => { this.endMonthYear = n.getDateOnlyValue(); },
            "institution": n => { this.institution = n.getObjectValue<InstitutionData>(createInstitutionDataFromDiscriminatorValue); },
            "program": n => { this.program = n.getObjectValue<EducationalActivityDetail>(createEducationalActivityDetailFromDiscriminatorValue); },
            "startMonthYear": n => { this.startMonthYear = n.getDateOnlyValue(); },
        };
    };
    /**
     * Gets the institution property value. The institution property
     * @returns a institutionData
     */
    public get institution() {
        return this._institution;
    };
    /**
     * Sets the institution property value. The institution property
     * @param value Value to set for the institution property.
     */
    public set institution(value: InstitutionData | undefined) {
        this._institution = value;
    };
    /**
     * Gets the program property value. The program property
     * @returns a educationalActivityDetail
     */
    public get program() {
        return this._program;
    };
    /**
     * Sets the program property value. The program property
     * @param value Value to set for the program property.
     */
    public set program(value: EducationalActivityDetail | undefined) {
        this._program = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateOnlyValue("completionMonthYear", this.completionMonthYear);
        writer.writeDateOnlyValue("endMonthYear", this.endMonthYear);
        writer.writeObjectValue<InstitutionData>("institution", this.institution);
        writer.writeObjectValue<EducationalActivityDetail>("program", this.program);
        writer.writeDateOnlyValue("startMonthYear", this.startMonthYear);
    };
    /**
     * Gets the startMonthYear property value. The month and year the user commenced the activity referenced.
     * @returns a DateOnly
     */
    public get startMonthYear() {
        return this._startMonthYear;
    };
    /**
     * Sets the startMonthYear property value. The month and year the user commenced the activity referenced.
     * @param value Value to set for the startMonthYear property.
     */
    public set startMonthYear(value: DateOnly | undefined) {
        this._startMonthYear = value;
    };
}
