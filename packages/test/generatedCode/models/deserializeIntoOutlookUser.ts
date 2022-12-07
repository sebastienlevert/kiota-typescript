import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOutlookCategory} from './deserializeIntoOutlookCategory';
import {deserializeIntoOutlookTask} from './deserializeIntoOutlookTask';
import {deserializeIntoOutlookTaskFolder} from './deserializeIntoOutlookTaskFolder';
import {deserializeIntoOutlookTaskGroup} from './deserializeIntoOutlookTaskGroup';
import {OutlookUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookUser(outlookUser: OutlookUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookUser),
        "masterCategories": n => { outlookUser.masterCategories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookCategory) as any ; },
        "taskFolders": n => { outlookUser.taskFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTaskFolder) as any ; },
        "taskGroups": n => { outlookUser.taskGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTaskGroup) as any ; },
        "tasks": n => { outlookUser.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTask) as any ; },
    }
}
