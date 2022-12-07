import {createActivityStatisticsFromDiscriminatorValue} from './createActivityStatisticsFromDiscriminatorValue';
import {createSettingsFromDiscriminatorValue} from './createSettingsFromDiscriminatorValue';
import {ActivityStatistics, Entity, Settings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAnalytics extends Entity implements Parsable {
    /** The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable. */
    private _activityStatistics?: ActivityStatistics[] | undefined;
    /** The settings property */
    private _settings?: Settings | undefined;
    /**
     * Gets the activityStatistics property value. The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
     * @returns a activityStatistics
     */
    public get activityStatistics() {
        return this._activityStatistics;
    };
    /**
     * Sets the activityStatistics property value. The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
     * @param value Value to set for the activityStatistics property.
     */
    public set activityStatistics(value: ActivityStatistics[] | undefined) {
        this._activityStatistics = value;
    };
    /**
     * Instantiates a new userAnalytics and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activityStatistics": n => { this.activityStatistics = n.getCollectionOfObjectValues<ActivityStatistics>(createActivityStatisticsFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<Settings>(createSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ActivityStatistics>("activityStatistics", this.activityStatistics);
        writer.writeObjectValue<Settings>("settings", this.settings);
    };
    /**
     * Gets the settings property value. The settings property
     * @returns a settings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings property
     * @param value Value to set for the settings property.
     */
    public set settings(value: Settings | undefined) {
        this._settings = value;
    };
}
