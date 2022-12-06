import {ChangeTrackedEntity, ShiftAvailability} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftPreferences extends ChangeTrackedEntity, Partial<Parsable> {
    /** Availability of the user to be scheduled for work and its recurrence pattern. */
    availability?: ShiftAvailability[];
}
