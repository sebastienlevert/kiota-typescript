import {Entity, MultiValueLegacyExtendedProperty, OutlookTask, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookTaskFolder extends Entity, Partial<Parsable> {
    /** The version of the task folder. */
    changeKey?: string;
    /** True if the folder is the default task folder. */
    isDefaultFolder?: boolean;
    /** The collection of multi-value extended properties defined for the task folder. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The name of the task folder. */
    name?: string;
    /** The unique GUID identifier for the task folder's parent group. */
    parentGroupKey?: string;
    /** The collection of single-value extended properties defined for the task folder. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The tasks in this task folder. Read-only. Nullable. */
    tasks?: OutlookTask[];
}
