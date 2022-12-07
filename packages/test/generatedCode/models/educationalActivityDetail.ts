import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationalActivityDetail implements AdditionalDataHolder, Parsable {
    /** Shortened name of the degree or program (example: PhD, MBA) */
    private _abbreviation?: string | undefined;
    /** Extracurricular activities undertaken alongside the program. */
    private _activities?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Any awards or honors associated with the program. */
    private _awards?: string[] | undefined;
    /** Short description of the program provided by the user. */
    private _description?: string | undefined;
    /** Long-form name of the program that the user has provided. */
    private _displayName?: string | undefined;
    /** Majors and minors associated with the program. (if applicable) */
    private _fieldsOfStudy?: string[] | undefined;
    /** The final grade, class, GPA or score. */
    private _grade?: string | undefined;
    /** Additional notes the user has provided. */
    private _notes?: string | undefined;
    /** Link to the degree or program page. */
    private _webUrl?: string | undefined;
    /**
     * Gets the abbreviation property value. Shortened name of the degree or program (example: PhD, MBA)
     * @returns a string
     */
    public get abbreviation() {
        return this._abbreviation;
    };
    /**
     * Sets the abbreviation property value. Shortened name of the degree or program (example: PhD, MBA)
     * @param value Value to set for the abbreviation property.
     */
    public set abbreviation(value: string | undefined) {
        this._abbreviation = value;
    };
    /**
     * Gets the activities property value. Extracurricular activities undertaken alongside the program.
     * @returns a string
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. Extracurricular activities undertaken alongside the program.
     * @param value Value to set for the activities property.
     */
    public set activities(value: string[] | undefined) {
        this._activities = value;
    };
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
     * Gets the awards property value. Any awards or honors associated with the program.
     * @returns a string
     */
    public get awards() {
        return this._awards;
    };
    /**
     * Sets the awards property value. Any awards or honors associated with the program.
     * @param value Value to set for the awards property.
     */
    public set awards(value: string[] | undefined) {
        this._awards = value;
    };
    /**
     * Instantiates a new educationalActivityDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Short description of the program provided by the user.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Short description of the program provided by the user.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Long-form name of the program that the user has provided.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Long-form name of the program that the user has provided.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the fieldsOfStudy property value. Majors and minors associated with the program. (if applicable)
     * @returns a string
     */
    public get fieldsOfStudy() {
        return this._fieldsOfStudy;
    };
    /**
     * Sets the fieldsOfStudy property value. Majors and minors associated with the program. (if applicable)
     * @param value Value to set for the fieldsOfStudy property.
     */
    public set fieldsOfStudy(value: string[] | undefined) {
        this._fieldsOfStudy = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "abbreviation": n => { this.abbreviation = n.getStringValue(); },
            "activities": n => { this.activities = n.getCollectionOfPrimitiveValues<string>(); },
            "awards": n => { this.awards = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fieldsOfStudy": n => { this.fieldsOfStudy = n.getCollectionOfPrimitiveValues<string>(); },
            "grade": n => { this.grade = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the grade property value. The final grade, class, GPA or score.
     * @returns a string
     */
    public get grade() {
        return this._grade;
    };
    /**
     * Sets the grade property value. The final grade, class, GPA or score.
     * @param value Value to set for the grade property.
     */
    public set grade(value: string | undefined) {
        this._grade = value;
    };
    /**
     * Gets the notes property value. Additional notes the user has provided.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Additional notes the user has provided.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("abbreviation", this.abbreviation);
        writer.writeCollectionOfPrimitiveValues<string>("activities", this.activities);
        writer.writeCollectionOfPrimitiveValues<string>("awards", this.awards);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("fieldsOfStudy", this.fieldsOfStudy);
        writer.writeStringValue("grade", this.grade);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the webUrl property value. Link to the degree or program page.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Link to the degree or program page.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
