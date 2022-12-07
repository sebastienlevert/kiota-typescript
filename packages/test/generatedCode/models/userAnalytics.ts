import {ActivityStatistics, Entity, Settings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserAnalytics extends Entity, Partial<Parsable> {
    /** The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable. */
    activityStatistics?: ActivityStatistics[];
    /** The settings property */
    settings?: Settings;
}
