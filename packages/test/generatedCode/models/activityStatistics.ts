import {AnalyticsActivityType} from './analyticsActivityType';
import {Entity} from './index';
import {DateOnly, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActivityStatistics extends Entity implements Parsable {
    /** The activity property */
    private _activity?: AnalyticsActivityType | undefined;
    /** Total hours spent on the activity. The value is represented in ISO 8601 format for durations. */
    private _duration?: Duration | undefined;
    /** Date when the activity ended, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-03' that follows the YYYY-MM-DD format. */
    private _endDate?: DateOnly | undefined;
    /** Date when the activity started, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-04' that follows the YYYY-MM-DD format. */
    private _startDate?: DateOnly | undefined;
    /** The time zone that the user sets in Microsoft Outlook is used for the computation. For example, the property value could be 'Pacific Standard Time.' */
    private _timeZoneUsed?: string | undefined;
    /**
     * Gets the activity property value. The activity property
     * @returns a analyticsActivityType
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity property
     * @param value Value to set for the activity property.
     */
    public set activity(value: AnalyticsActivityType | undefined) {
        this._activity = value;
    };
    /**
     * Instantiates a new activityStatistics and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the duration property value. Total hours spent on the activity. The value is represented in ISO 8601 format for durations.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. Total hours spent on the activity. The value is represented in ISO 8601 format for durations.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        this._duration = value;
    };
    /**
     * Gets the endDate property value. Date when the activity ended, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-03' that follows the YYYY-MM-DD format.
     * @returns a DateOnly
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. Date when the activity ended, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-03' that follows the YYYY-MM-DD format.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: DateOnly | undefined) {
        this._endDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getEnumValue<AnalyticsActivityType>(AnalyticsActivityType); },
            "duration": n => { this.duration = n.getDurationValue(); },
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
            "timeZoneUsed": n => { this.timeZoneUsed = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AnalyticsActivityType>("activity", this.activity);
        writer.writeDurationValue("duration", this.duration);
        writer.writeDateOnlyValue("endDate", this.endDate);
        writer.writeDateOnlyValue("startDate", this.startDate);
        writer.writeStringValue("timeZoneUsed", this.timeZoneUsed);
    };
    /**
     * Gets the startDate property value. Date when the activity started, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-04' that follows the YYYY-MM-DD format.
     * @returns a DateOnly
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. Date when the activity started, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-04' that follows the YYYY-MM-DD format.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: DateOnly | undefined) {
        this._startDate = value;
    };
    /**
     * Gets the timeZoneUsed property value. The time zone that the user sets in Microsoft Outlook is used for the computation. For example, the property value could be 'Pacific Standard Time.'
     * @returns a string
     */
    public get timeZoneUsed() {
        return this._timeZoneUsed;
    };
    /**
     * Sets the timeZoneUsed property value. The time zone that the user sets in Microsoft Outlook is used for the computation. For example, the property value could be 'Pacific Standard Time.'
     * @param value Value to set for the timeZoneUsed property.
     */
    public set timeZoneUsed(value: string | undefined) {
        this._timeZoneUsed = value;
    };
}
