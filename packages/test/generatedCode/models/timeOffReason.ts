import {ChangeTrackedEntity} from './index';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffReason extends ChangeTrackedEntity, Partial<Parsable> {
    /** The name of the timeOffReason. Required. */
    displayName?: string;
    /** The iconType property */
    iconType?: TimeOffReasonIconType;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required. */
    isActive?: boolean;
}
