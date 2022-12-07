import {deserializeIntoAudio} from './deserializeIntoAudio';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoBundle} from './deserializeIntoBundle';
import {deserializeIntoDeleted} from './deserializeIntoDeleted';
import {deserializeIntoDriveItemSource} from './deserializeIntoDriveItemSource';
import {deserializeIntoDriveItemVersion} from './deserializeIntoDriveItemVersion';
import {deserializeIntoFile} from './deserializeIntoFile';
import {deserializeIntoFileSystemInfo} from './deserializeIntoFileSystemInfo';
import {deserializeIntoFolder} from './deserializeIntoFolder';
import {deserializeIntoGeoCoordinates} from './deserializeIntoGeoCoordinates';
import {deserializeIntoImage} from './deserializeIntoImage';
import {deserializeIntoItemActivityOLD} from './deserializeIntoItemActivityOLD';
import {deserializeIntoItemAnalytics} from './deserializeIntoItemAnalytics';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {deserializeIntoMalware} from './deserializeIntoMalware';
import {deserializeIntoMedia} from './deserializeIntoMedia';
import {deserializeIntoPackage} from './deserializeIntoPackage';
import {deserializeIntoPendingOperations} from './deserializeIntoPendingOperations';
import {deserializeIntoPermission} from './deserializeIntoPermission';
import {deserializeIntoPhoto} from './deserializeIntoPhoto';
import {deserializeIntoPublicationFacet} from './deserializeIntoPublicationFacet';
import {deserializeIntoRemoteItem} from './deserializeIntoRemoteItem';
import {deserializeIntoRoot} from './deserializeIntoRoot';
import {deserializeIntoSearchResult} from './deserializeIntoSearchResult';
import {deserializeIntoShared} from './deserializeIntoShared';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {deserializeIntoSpecialFolder} from './deserializeIntoSpecialFolder';
import {deserializeIntoSubscription} from './deserializeIntoSubscription';
import {deserializeIntoThumbnailSet} from './deserializeIntoThumbnailSet';
import {deserializeIntoVideo} from './deserializeIntoVideo';
import {deserializeIntoWorkbook} from './deserializeIntoWorkbook';
import {DriveItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItem(driveItem: DriveItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(driveItem),
        "activities": n => { driveItem.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityOLD) as any ; },
        "analytics": n => { driveItem.analytics = n.getObject(deserializeIntoItemAnalytics) as any ; },
        "audio": n => { driveItem.audio = n.getObject(deserializeIntoAudio) as any ; },
        "bundle": n => { driveItem.bundle = n.getObject(deserializeIntoBundle) as any ; },
        "children": n => { driveItem.children = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "content": n => { driveItem.content = n.getStringValue() as any ; },
        "cTag": n => { driveItem.cTag = n.getStringValue() as any ; },
        "deleted": n => { driveItem.deleted = n.getObject(deserializeIntoDeleted) as any ; },
        "file": n => { driveItem.file = n.getObject(deserializeIntoFile) as any ; },
        "fileSystemInfo": n => { driveItem.fileSystemInfo = n.getObject(deserializeIntoFileSystemInfo) as any ; },
        "folder": n => { driveItem.folder = n.getObject(deserializeIntoFolder) as any ; },
        "image": n => { driveItem.image = n.getObject(deserializeIntoImage) as any ; },
        "listItem": n => { driveItem.listItem = n.getObject(deserializeIntoListItem) as any ; },
        "location": n => { driveItem.location = n.getObject(deserializeIntoGeoCoordinates) as any ; },
        "malware": n => { driveItem.malware = n.getObject(deserializeIntoMalware) as any ; },
        "media": n => { driveItem.media = n.getObject(deserializeIntoMedia) as any ; },
        "package": n => { driveItem.package = n.getObject(deserializeIntoPackage) as any ; },
        "pendingOperations": n => { driveItem.pendingOperations = n.getObject(deserializeIntoPendingOperations) as any ; },
        "permissions": n => { driveItem.permissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermission) as any ; },
        "photo": n => { driveItem.photo = n.getObject(deserializeIntoPhoto) as any ; },
        "publication": n => { driveItem.publication = n.getObject(deserializeIntoPublicationFacet) as any ; },
        "remoteItem": n => { driveItem.remoteItem = n.getObject(deserializeIntoRemoteItem) as any ; },
        "root": n => { driveItem.root = n.getObject(deserializeIntoRoot) as any ; },
        "searchResult": n => { driveItem.searchResult = n.getObject(deserializeIntoSearchResult) as any ; },
        "shared": n => { driveItem.shared = n.getObject(deserializeIntoShared) as any ; },
        "sharepointIds": n => { driveItem.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "size": n => { driveItem.size = n.getNumberValue() as any ; },
        "source": n => { driveItem.source = n.getObject(deserializeIntoDriveItemSource) as any ; },
        "specialFolder": n => { driveItem.specialFolder = n.getObject(deserializeIntoSpecialFolder) as any ; },
        "subscriptions": n => { driveItem.subscriptions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubscription) as any ; },
        "thumbnails": n => { driveItem.thumbnails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThumbnailSet) as any ; },
        "versions": n => { driveItem.versions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItemVersion) as any ; },
        "video": n => { driveItem.video = n.getObject(deserializeIntoVideo) as any ; },
        "webDavUrl": n => { driveItem.webDavUrl = n.getStringValue() as any ; },
        "workbook": n => { driveItem.workbook = n.getObject(deserializeIntoWorkbook) as any ; },
    }
}
