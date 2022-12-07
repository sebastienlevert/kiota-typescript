import {OutlookTaskFolder} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookTask} from './serializeOutlookTask';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTaskFolder(writer: SerializationWriter, outlookTaskFolder: OutlookTaskFolder | undefined = {}) : void {
        serializeEntity(writer, outlookTaskFolder)
            writer.writeStringValue("changeKey", outlookTaskFolder.changeKey);
            writer.writeBooleanValue("isDefaultFolder", outlookTaskFolder.isDefaultFolder);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", outlookTaskFolder.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("name", outlookTaskFolder.name);
            writer.writeStringValue("parentGroupKey", outlookTaskFolder.parentGroupKey);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", outlookTaskFolder.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", outlookTaskFolder.tasks as any, serializeOutlookTask);
}
