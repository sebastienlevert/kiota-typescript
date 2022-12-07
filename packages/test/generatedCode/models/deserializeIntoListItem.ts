import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {deserializeIntoDeleted} from './deserializeIntoDeleted';
import {deserializeIntoDocumentSetVersion} from './deserializeIntoDocumentSetVersion';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoFieldValueSet} from './deserializeIntoFieldValueSet';
import {deserializeIntoItemActivityOLD} from './deserializeIntoItemActivityOLD';
import {deserializeIntoItemAnalytics} from './deserializeIntoItemAnalytics';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {ListItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItem(listItem: ListItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(listItem),
        "activities": n => { listItem.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityOLD) as any ; },
        "analytics": n => { listItem.analytics = n.getObject(deserializeIntoItemAnalytics) as any ; },
        "contentType": n => { listItem.contentType = n.getObject(deserializeIntoContentTypeInfo) as any ; },
        "deleted": n => { listItem.deleted = n.getObject(deserializeIntoDeleted) as any ; },
        "documentSetVersions": n => { listItem.documentSetVersions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetVersion) as any ; },
        "driveItem": n => { listItem.driveItem = n.getObject(deserializeIntoDriveItem) as any ; },
        "fields": n => { listItem.fields = n.getObject(deserializeIntoFieldValueSet) as any ; },
        "sharepointIds": n => { listItem.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "versions": n => { listItem.versions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoListItemVersion) as any ; },
    }
}
