import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {deserializeIntoContentType} from './deserializeIntoContentType';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {deserializeIntoItemActivityOLD} from './deserializeIntoItemActivityOLD';
import {deserializeIntoListInfo} from './deserializeIntoListInfo';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {deserializeIntoRichLongRunningOperation} from './deserializeIntoRichLongRunningOperation';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {deserializeIntoSubscription} from './deserializeIntoSubscription';
import {deserializeIntoSystemFacet} from './deserializeIntoSystemFacet';
import {List} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoList(list: List | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(list),
        "activities": n => { list.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityOLD) as any ; },
        "columns": n => { list.columns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "contentTypes": n => { list.contentTypes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
        "displayName": n => { list.displayName = n.getStringValue() as any ; },
        "drive": n => { list.drive = n.getObject(deserializeIntoDrive) as any ; },
        "items": n => { list.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoListItem) as any ; },
        "list": n => { list.list = n.getObject(deserializeIntoListInfo) as any ; },
        "operations": n => { list.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRichLongRunningOperation) as any ; },
        "sharepointIds": n => { list.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "subscriptions": n => { list.subscriptions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubscription) as any ; },
        "system": n => { list.system = n.getObject(deserializeIntoSystemFacet) as any ; },
    }
}
