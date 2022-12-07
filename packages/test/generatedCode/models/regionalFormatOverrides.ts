import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegionalFormatOverrides implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The calendar to use, e.g., Gregorian Calendar.Returned by default. */
    private _calendar?: string | undefined;
    /** The first day of the week to use, e.g., Sunday.Returned by default. */
    private _firstDayOfWeek?: string | undefined;
    /** The long date time format to be used for displaying dates.Returned by default. */
    private _longDateFormat?: string | undefined;
    /** The long time format to be used for displaying time.Returned by default. */
    private _longTimeFormat?: string | undefined;
    /** The short date time format to be used for displaying dates.Returned by default. */
    private _shortDateFormat?: string | undefined;
    /** The short time format to be used for displaying time.Returned by default. */
    private _shortTimeFormat?: string | undefined;
    /** The timezone to be used for displaying time.Returned by default. */
    private _timeZone?: string | undefined;
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
     * Gets the calendar property value. The calendar to use, e.g., Gregorian Calendar.Returned by default.
     * @returns a string
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The calendar to use, e.g., Gregorian Calendar.Returned by default.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: string | undefined) {
        this._calendar = value;
    };
    /**
     * Instantiates a new regionalFormatOverrides and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the firstDayOfWeek property value. The first day of the week to use, e.g., Sunday.Returned by default.
     * @returns a string
     */
    public get firstDayOfWeek() {
        return this._firstDayOfWeek;
    };
    /**
     * Sets the firstDayOfWeek property value. The first day of the week to use, e.g., Sunday.Returned by default.
     * @param value Value to set for the firstDayOfWeek property.
     */
    public set firstDayOfWeek(value: string | undefined) {
        this._firstDayOfWeek = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendar": n => { this.calendar = n.getStringValue(); },
            "firstDayOfWeek": n => { this.firstDayOfWeek = n.getStringValue(); },
            "longDateFormat": n => { this.longDateFormat = n.getStringValue(); },
            "longTimeFormat": n => { this.longTimeFormat = n.getStringValue(); },
            "shortDateFormat": n => { this.shortDateFormat = n.getStringValue(); },
            "shortTimeFormat": n => { this.shortTimeFormat = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
        };
    };
    /**
     * Gets the longDateFormat property value. The long date time format to be used for displaying dates.Returned by default.
     * @returns a string
     */
    public get longDateFormat() {
        return this._longDateFormat;
    };
    /**
     * Sets the longDateFormat property value. The long date time format to be used for displaying dates.Returned by default.
     * @param value Value to set for the longDateFormat property.
     */
    public set longDateFormat(value: string | undefined) {
        this._longDateFormat = value;
    };
    /**
     * Gets the longTimeFormat property value. The long time format to be used for displaying time.Returned by default.
     * @returns a string
     */
    public get longTimeFormat() {
        return this._longTimeFormat;
    };
    /**
     * Sets the longTimeFormat property value. The long time format to be used for displaying time.Returned by default.
     * @param value Value to set for the longTimeFormat property.
     */
    public set longTimeFormat(value: string | undefined) {
        this._longTimeFormat = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("calendar", this.calendar);
        writer.writeStringValue("firstDayOfWeek", this.firstDayOfWeek);
        writer.writeStringValue("longDateFormat", this.longDateFormat);
        writer.writeStringValue("longTimeFormat", this.longTimeFormat);
        writer.writeStringValue("shortDateFormat", this.shortDateFormat);
        writer.writeStringValue("shortTimeFormat", this.shortTimeFormat);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the shortDateFormat property value. The short date time format to be used for displaying dates.Returned by default.
     * @returns a string
     */
    public get shortDateFormat() {
        return this._shortDateFormat;
    };
    /**
     * Sets the shortDateFormat property value. The short date time format to be used for displaying dates.Returned by default.
     * @param value Value to set for the shortDateFormat property.
     */
    public set shortDateFormat(value: string | undefined) {
        this._shortDateFormat = value;
    };
    /**
     * Gets the shortTimeFormat property value. The short time format to be used for displaying time.Returned by default.
     * @returns a string
     */
    public get shortTimeFormat() {
        return this._shortTimeFormat;
    };
    /**
     * Sets the shortTimeFormat property value. The short time format to be used for displaying time.Returned by default.
     * @param value Value to set for the shortTimeFormat property.
     */
    public set shortTimeFormat(value: string | undefined) {
        this._shortTimeFormat = value;
    };
    /**
     * Gets the timeZone property value. The timezone to be used for displaying time.Returned by default.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The timezone to be used for displaying time.Returned by default.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
