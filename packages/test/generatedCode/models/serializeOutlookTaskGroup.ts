import {OutlookTaskGroup} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeOutlookTaskFolder} from './serializeOutlookTaskFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTaskGroup(writer: SerializationWriter, outlookTaskGroup: OutlookTaskGroup | undefined = {}) : void {
        serializeEntity(writer, outlookTaskGroup)
            writer.writeStringValue("changeKey", outlookTaskGroup.changeKey);
            writer.writeStringValue("groupKey", outlookTaskGroup.groupKey);
            writer.writeBooleanValue("isDefaultGroup", outlookTaskGroup.isDefaultGroup);
            writer.writeStringValue("name", outlookTaskGroup.name);
            writer.writeCollectionOfObjectValuesFromMethod("taskFolders", outlookTaskGroup.taskFolders as any, serializeOutlookTaskFolder);
}
