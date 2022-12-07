import {List} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeContentType} from './serializeContentType';
import {serializeDrive} from './serializeDrive';
import {serializeItemActivityOLD} from './serializeItemActivityOLD';
import {serializeListInfo} from './serializeListInfo';
import {serializeListItem} from './serializeListItem';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSubscription} from './serializeSubscription';
import {serializeSystemFacet} from './serializeSystemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeList(writer: SerializationWriter, list: List | undefined = {}) : void {
        serializeBaseItem(writer, list)
            writer.writeCollectionOfObjectValuesFromMethod("activities", list.activities as any, serializeItemActivityOLD);
            writer.writeCollectionOfObjectValuesFromMethod("columns", list.columns as any, serializeColumnDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("contentTypes", list.contentTypes as any, serializeContentType);
            writer.writeStringValue("displayName", list.displayName);
            writer.writeObjectValueFromMethod("drive", list.drive as any, serializeDrive);
            writer.writeCollectionOfObjectValuesFromMethod("items", list.items as any, serializeListItem);
            writer.writeObjectValueFromMethod("list", list.list as any, serializeListInfo);
            writer.writeCollectionOfObjectValuesFromMethod("operations", list.operations as any, serializeRichLongRunningOperation);
            writer.writeObjectValueFromMethod("sharepointIds", list.sharepointIds as any, serializeSharepointIds);
            writer.writeCollectionOfObjectValuesFromMethod("subscriptions", list.subscriptions as any, serializeSubscription);
            writer.writeObjectValueFromMethod("system", list.system as any, serializeSystemFacet);
}
