import {Entity, OutlookCategory, OutlookTask, OutlookTaskFolder, OutlookTaskGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookUser extends Entity, Partial<Parsable> {
    /** A list of categories defined for the user. */
    masterCategories?: OutlookCategory[];
    /** The taskFolders property */
    taskFolders?: OutlookTaskFolder[];
    /** The taskGroups property */
    taskGroups?: OutlookTaskGroup[];
    /** The tasks property */
    tasks?: OutlookTask[];
}
