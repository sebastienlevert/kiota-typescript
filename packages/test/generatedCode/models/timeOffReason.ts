import {ChangeTrackedEntity} from './index';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffReason extends ChangeTrackedEntity, Partial<Parsable> {
    /** The name of the timeOffReason. Required. */
    displayName?: string;
    /** Supported icon types are: none, car, calendar, running, plane, firstAid, doctor, notWorking, clock, juryDuty, globe, cup, phone, weather, umbrella, piggyBank, dog, cake, trafficCone, pin, sunny. Required. */
    iconType?: TimeOffReasonIconType;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required. */
    isActive?: boolean;
}
