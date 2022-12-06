import {ChangeTrackedEntity, OpenShiftItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShift extends ChangeTrackedEntity, Partial<Parsable> {
    /** An unpublished open shift. */
    draftOpenShift?: OpenShiftItem;
    /** ID for the scheduling group that the open shift belongs to. */
    schedulingGroupId?: string;
    /** A published open shift. */
    sharedOpenShift?: OpenShiftItem;
}
