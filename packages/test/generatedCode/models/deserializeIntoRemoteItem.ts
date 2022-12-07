import {deserializeIntoFile} from './deserializeIntoFile';
import {deserializeIntoFileSystemInfo} from './deserializeIntoFileSystemInfo';
import {deserializeIntoFolder} from './deserializeIntoFolder';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoImage} from './deserializeIntoImage';
import {deserializeIntoItemReference} from './deserializeIntoItemReference';
import {deserializeIntoPackage} from './deserializeIntoPackage';
import {deserializeIntoShared} from './deserializeIntoShared';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {deserializeIntoSpecialFolder} from './deserializeIntoSpecialFolder';
import {deserializeIntoVideo} from './deserializeIntoVideo';
import {RemoteItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteItem(remoteItem: RemoteItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { remoteItem.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { remoteItem.createdDateTime = n.getDateValue() as any ; },
        "file": n => { remoteItem.file = n.getObject(deserializeIntoFile) as any ; },
        "fileSystemInfo": n => { remoteItem.fileSystemInfo = n.getObject(deserializeIntoFileSystemInfo) as any ; },
        "folder": n => { remoteItem.folder = n.getObject(deserializeIntoFolder) as any ; },
        "id": n => { remoteItem.id = n.getStringValue() as any ; },
        "image": n => { remoteItem.image = n.getObject(deserializeIntoImage) as any ; },
        "lastModifiedBy": n => { remoteItem.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { remoteItem.lastModifiedDateTime = n.getDateValue() as any ; },
        "name": n => { remoteItem.name = n.getStringValue() as any ; },
        "package": n => { remoteItem.package = n.getObject(deserializeIntoPackage) as any ; },
        "parentReference": n => { remoteItem.parentReference = n.getObject(deserializeIntoItemReference) as any ; },
        "shared": n => { remoteItem.shared = n.getObject(deserializeIntoShared) as any ; },
        "sharepointIds": n => { remoteItem.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "size": n => { remoteItem.size = n.getNumberValue() as any ; },
        "specialFolder": n => { remoteItem.specialFolder = n.getObject(deserializeIntoSpecialFolder) as any ; },
        "video": n => { remoteItem.video = n.getObject(deserializeIntoVideo) as any ; },
        "webDavUrl": n => { remoteItem.webDavUrl = n.getStringValue() as any ; },
        "webUrl": n => { remoteItem.webUrl = n.getStringValue() as any ; },
    }
}
