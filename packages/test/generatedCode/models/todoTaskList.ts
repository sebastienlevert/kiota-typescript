import {Entity, Extension, TodoTask} from './index';
import {WellknownListName} from './wellknownListName';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskList extends Entity, Partial<Parsable> {
    /** The name of the task list. */
    displayName?: string;
    /** The collection of open extensions defined for the task list. Nullable. */
    extensions?: Extension[];
    /** True if the user is owner of the given task list. */
    isOwner?: boolean;
    /** True if the task list is shared with other users */
    isShared?: boolean;
    /** The tasks in this task list. Read-only. Nullable. */
    tasks?: TodoTask[];
    /** The wellknownListName property */
    wellknownListName?: WellknownListName;
}
