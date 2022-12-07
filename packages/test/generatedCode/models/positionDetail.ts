import {createCompanyDetailFromDiscriminatorValue} from './createCompanyDetailFromDiscriminatorValue';
import {CompanyDetail} from './index';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PositionDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The company property */
    private _company?: CompanyDetail | undefined;
    /** Description of the position in question. */
    private _description?: string | undefined;
    /** When the position ended. */
    private _endMonthYear?: DateOnly | undefined;
    /** The title held when in that position. */
    private _jobTitle?: string | undefined;
    /** The role the position entailed. */
    private _role?: string | undefined;
    /** The start month and year of the position. */
    private _startMonthYear?: DateOnly | undefined;
    /** Short summary of the position. */
    private _summary?: string | undefined;
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
     * Gets the company property value. The company property
     * @returns a companyDetail
     */
    public get company() {
        return this._company;
    };
    /**
     * Sets the company property value. The company property
     * @param value Value to set for the company property.
     */
    public set company(value: CompanyDetail | undefined) {
        this._company = value;
    };
    /**
     * Instantiates a new positionDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Description of the position in question.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the position in question.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the endMonthYear property value. When the position ended.
     * @returns a DateOnly
     */
    public get endMonthYear() {
        return this._endMonthYear;
    };
    /**
     * Sets the endMonthYear property value. When the position ended.
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
        return {
            "company": n => { this.company = n.getObjectValue<CompanyDetail>(createCompanyDetailFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "endMonthYear": n => { this.endMonthYear = n.getDateOnlyValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "role": n => { this.role = n.getStringValue(); },
            "startMonthYear": n => { this.startMonthYear = n.getDateOnlyValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
        };
    };
    /**
     * Gets the jobTitle property value. The title held when in that position.
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The title held when in that position.
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Gets the role property value. The role the position entailed.
     * @returns a string
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. The role the position entailed.
     * @param value Value to set for the role property.
     */
    public set role(value: string | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<CompanyDetail>("company", this.company);
        writer.writeStringValue("description", this.description);
        writer.writeDateOnlyValue("endMonthYear", this.endMonthYear);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("role", this.role);
        writer.writeDateOnlyValue("startMonthYear", this.startMonthYear);
        writer.writeStringValue("summary", this.summary);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startMonthYear property value. The start month and year of the position.
     * @returns a DateOnly
     */
    public get startMonthYear() {
        return this._startMonthYear;
    };
    /**
     * Sets the startMonthYear property value. The start month and year of the position.
     * @param value Value to set for the startMonthYear property.
     */
    public set startMonthYear(value: DateOnly | undefined) {
        this._startMonthYear = value;
    };
    /**
     * Gets the summary property value. Short summary of the position.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Short summary of the position.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
}
