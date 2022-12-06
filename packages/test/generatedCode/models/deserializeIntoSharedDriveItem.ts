import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoList} from './deserializeIntoList';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {deserializeIntoPermission} from './deserializeIntoPermission';
import {deserializeIntoSite} from './deserializeIntoSite';
import {SharedDriveItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedDriveItem(sharedDriveItem: SharedDriveItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(sharedDriveItem),
        "driveItem": n => { sharedDriveItem.driveItem = n.getObject(deserializeIntoDriveItem) as any ; },
        "items": n => { sharedDriveItem.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "list": n => { sharedDriveItem.list = n.getObject(deserializeIntoList) as any ; },
        "listItem": n => { sharedDriveItem.listItem = n.getObject(deserializeIntoListItem) as any ; },
        "owner": n => { sharedDriveItem.owner = n.getObject(deserializeIntoIdentitySet) as any ; },
        "permission": n => { sharedDriveItem.permission = n.getObject(deserializeIntoPermission) as any ; },
        "root": n => { sharedDriveItem.root = n.getObject(deserializeIntoDriveItem) as any ; },
        "site": n => { sharedDriveItem.site = n.getObject(deserializeIntoSite) as any ; },
    }
}
