import {Entity, OutlookTaskFolder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookTaskGroup extends Entity, Partial<Parsable> {
    /** The version of the task group. */
    changeKey?: string;
    /** The unique GUID identifier for the task group. */
    groupKey?: string;
    /** True if the task group is the default task group. */
    isDefaultGroup?: boolean;
    /** The name of the task group. */
    name?: string;
    /** The collection of task folders in the task group. Read-only. Nullable. */
    taskFolders?: OutlookTaskFolder[];
}
