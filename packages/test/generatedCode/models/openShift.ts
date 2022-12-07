import {ChangeTrackedEntity, OpenShiftItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShift extends ChangeTrackedEntity, Partial<Parsable> {
    /** The draftOpenShift property */
    draftOpenShift?: OpenShiftItem;
    /** The isStagedForDeletion property */
    isStagedForDeletion?: boolean;
    /** ID for the scheduling group that the open shift belongs to. */
    schedulingGroupId?: string;
    /** The sharedOpenShift property */
    sharedOpenShift?: OpenShiftItem;
}
