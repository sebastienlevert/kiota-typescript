import {OutlookUser} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {serializeOutlookTask} from './serializeOutlookTask';
import {serializeOutlookTaskFolder} from './serializeOutlookTaskFolder';
import {serializeOutlookTaskGroup} from './serializeOutlookTaskGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookUser(writer: SerializationWriter, outlookUser: OutlookUser | undefined = {}) : void {
        serializeEntity(writer, outlookUser)
            writer.writeCollectionOfObjectValuesFromMethod("masterCategories", outlookUser.masterCategories as any, serializeOutlookCategory);
            writer.writeCollectionOfObjectValuesFromMethod("taskFolders", outlookUser.taskFolders as any, serializeOutlookTaskFolder);
            writer.writeCollectionOfObjectValuesFromMethod("taskGroups", outlookUser.taskGroups as any, serializeOutlookTaskGroup);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", outlookUser.tasks as any, serializeOutlookTask);
}
