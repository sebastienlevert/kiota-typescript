import {ItemActivityStat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIncompleteData} from './serializeIncompleteData';
import {serializeItemActionStat} from './serializeItemActionStat';
import {serializeItemActivity} from './serializeItemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityStat(writer: SerializationWriter, itemActivityStat: ItemActivityStat | undefined = {}) : void {
        serializeEntity(writer, itemActivityStat)
            writer.writeObjectValueFromMethod("access", itemActivityStat.access as any, serializeItemActionStat);
            writer.writeCollectionOfObjectValuesFromMethod("activities", itemActivityStat.activities as any, serializeItemActivity);
            writer.writeObjectValueFromMethod("create", itemActivityStat.create as any, serializeItemActionStat);
            writer.writeObjectValueFromMethod("delete", itemActivityStat.delete as any, serializeItemActionStat);
            writer.writeObjectValueFromMethod("edit", itemActivityStat.edit as any, serializeItemActionStat);
            writer.writeDateValue("endDateTime", itemActivityStat.endDateTime);
            writer.writeObjectValueFromMethod("incompleteData", itemActivityStat.incompleteData as any, serializeIncompleteData);
            writer.writeBooleanValue("isTrending", itemActivityStat.isTrending);
            writer.writeObjectValueFromMethod("move", itemActivityStat.move as any, serializeItemActionStat);
            writer.writeDateValue("startDateTime", itemActivityStat.startDateTime);
}
