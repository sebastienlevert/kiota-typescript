import {ListItem} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeDeleted} from './serializeDeleted';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {serializeItemActivityOLD} from './serializeItemActivityOLD';
import {serializeItemAnalytics} from './serializeItemAnalytics';
import {serializeListItemVersion} from './serializeListItemVersion';
import {serializeSharepointIds} from './serializeSharepointIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItem(writer: SerializationWriter, listItem: ListItem | undefined = {}) : void {
        serializeBaseItem(writer, listItem)
            writer.writeCollectionOfObjectValuesFromMethod("activities", listItem.activities as any, serializeItemActivityOLD);
            writer.writeObjectValueFromMethod("analytics", listItem.analytics as any, serializeItemAnalytics);
            writer.writeObjectValueFromMethod("contentType", listItem.contentType as any, serializeContentTypeInfo);
            writer.writeObjectValueFromMethod("deleted", listItem.deleted as any, serializeDeleted);
            writer.writeCollectionOfObjectValuesFromMethod("documentSetVersions", listItem.documentSetVersions as any, serializeDocumentSetVersion);
            writer.writeObjectValueFromMethod("driveItem", listItem.driveItem as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("fields", listItem.fields as any, serializeFieldValueSet);
            writer.writeObjectValueFromMethod("sharepointIds", listItem.sharepointIds as any, serializeSharepointIds);
            writer.writeCollectionOfObjectValuesFromMethod("versions", listItem.versions as any, serializeListItemVersion);
}
