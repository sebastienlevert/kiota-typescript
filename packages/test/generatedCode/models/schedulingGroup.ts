import {ChangeTrackedEntity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroup extends ChangeTrackedEntity, Partial<Parsable> {
    /** The display name for the schedulingGroup. Required. */
    displayName?: string;
    /** Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required. */
    isActive?: boolean;
    /** The list of user IDs that are a member of the schedulingGroup. Required. */
    userIds?: string[];
}
