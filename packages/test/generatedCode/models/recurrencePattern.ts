import {DayOfWeek} from './dayOfWeek';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecurrencePattern implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly. */
    private _dayOfMonth?: number | undefined;
    /** A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly. */
    private _daysOfWeek?: DayOfWeek[] | undefined;
    /** The firstDayOfWeek property */
    private _firstDayOfWeek?: DayOfWeek | undefined;
    /** The index property */
    private _index?: WeekIndex | undefined;
    /** The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required. */
    private _interval?: number | undefined;
    /** The month in which the event occurs.  This is a number from 1 to 12. */
    private _month?: number | undefined;
    /** The type property */
    private _type?: RecurrencePatternType | undefined;
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
     * Instantiates a new recurrencePattern and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dayOfMonth property value. The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly.
     * @returns a integer
     */
    public get dayOfMonth() {
        return this._dayOfMonth;
    };
    /**
     * Sets the dayOfMonth property value. The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly.
     * @param value Value to set for the dayOfMonth property.
     */
    public set dayOfMonth(value: number | undefined) {
        this._dayOfMonth = value;
    };
    /**
     * Gets the daysOfWeek property value. A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly.
     * @returns a dayOfWeek
     */
    public get daysOfWeek() {
        return this._daysOfWeek;
    };
    /**
     * Sets the daysOfWeek property value. A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly.
     * @param value Value to set for the daysOfWeek property.
     */
    public set daysOfWeek(value: DayOfWeek[] | undefined) {
        this._daysOfWeek = value;
    };
    /**
     * Gets the firstDayOfWeek property value. The firstDayOfWeek property
     * @returns a dayOfWeek
     */
    public get firstDayOfWeek() {
        return this._firstDayOfWeek;
    };
    /**
     * Sets the firstDayOfWeek property value. The firstDayOfWeek property
     * @param value Value to set for the firstDayOfWeek property.
     */
    public set firstDayOfWeek(value: DayOfWeek | undefined) {
        this._firstDayOfWeek = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dayOfMonth": n => { this.dayOfMonth = n.getNumberValue(); },
            "daysOfWeek": n => { this.daysOfWeek = n.getEnumValues<DayOfWeek>(DayOfWeek); },
            "firstDayOfWeek": n => { this.firstDayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "index": n => { this.index = n.getEnumValue<WeekIndex>(WeekIndex); },
            "interval": n => { this.interval = n.getNumberValue(); },
            "month": n => { this.month = n.getNumberValue(); },
            "type": n => { this.type = n.getEnumValue<RecurrencePatternType>(RecurrencePatternType); },
        };
    };
    /**
     * Gets the index property value. The index property
     * @returns a weekIndex
     */
    public get index() {
        return this._index;
    };
    /**
     * Sets the index property value. The index property
     * @param value Value to set for the index property.
     */
    public set index(value: WeekIndex | undefined) {
        this._index = value;
    };
    /**
     * Gets the interval property value. The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required.
     * @returns a integer
     */
    public get interval() {
        return this._interval;
    };
    /**
     * Sets the interval property value. The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required.
     * @param value Value to set for the interval property.
     */
    public set interval(value: number | undefined) {
        this._interval = value;
    };
    /**
     * Gets the month property value. The month in which the event occurs.  This is a number from 1 to 12.
     * @returns a integer
     */
    public get month() {
        return this._month;
    };
    /**
     * Sets the month property value. The month in which the event occurs.  This is a number from 1 to 12.
     * @param value Value to set for the month property.
     */
    public set month(value: number | undefined) {
        this._month = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("dayOfMonth", this.dayOfMonth);
        this.daysOfWeek && writer.writeEnumValue<DayOfWeek>("daysOfWeek", ...this.daysOfWeek);
        writer.writeEnumValue<DayOfWeek>("firstDayOfWeek", this.firstDayOfWeek);
        writer.writeEnumValue<WeekIndex>("index", this.index);
        writer.writeNumberValue("interval", this.interval);
        writer.writeNumberValue("month", this.month);
        writer.writeEnumValue<RecurrencePatternType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a recurrencePatternType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: RecurrencePatternType | undefined) {
        this._type = value;
    };
}
