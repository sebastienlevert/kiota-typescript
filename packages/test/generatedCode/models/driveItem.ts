import {Audio, BaseItem, Bundle, Deleted, DriveItemVersion, File, FileSystemInfo, Folder, GeoCoordinates, Image, ItemAnalytics, ListItem, Malware, Package, PendingOperations, Permission, Photo, PublicationFacet, RemoteItem, Root, SearchResult, Shared, SharepointIds, SpecialFolder, Subscription, ThumbnailSet, Video, Workbook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItem extends BaseItem, Partial<Parsable> {
    /** Analytics about the view activities that took place on this item. */
    analytics?: ItemAnalytics;
    /** Audio metadata, if the item is an audio file. Read-only. Read-only. Only on OneDrive Personal. */
    audio?: Audio;
    /** Bundle metadata, if the item is a bundle. Read-only. */
    bundle?: Bundle;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
    children?: DriveItem[];
    /** The content stream, if the item represents a file. */
    content?: string;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
    cTag?: string;
    /** Information about the deleted state of the item. Read-only. */
    deleted?: Deleted;
    /** File metadata, if the item is a file. Read-only. */
    file?: File;
    /** File system information on client. Read-write. */
    fileSystemInfo?: FileSystemInfo;
    /** Folder metadata, if the item is a folder. Read-only. */
    folder?: Folder;
    /** Image metadata, if the item is an image. Read-only. */
    image?: Image;
    /** For drives in SharePoint, the associated document library list item. Read-only. Nullable. */
    listItem?: ListItem;
    /** Location metadata, if the item has location data. Read-only. */
    location?: GeoCoordinates;
    /** Malware metadata, if the item was detected to contain malware. Read-only. */
    malware?: Malware;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
    package?: Package;
    /** If present, indicates that one or more operations that might affect the state of the driveItem are pending completion. Read-only. */
    pendingOperations?: PendingOperations;
    /** The set of permissions for the item. Read-only. Nullable. */
    permissions?: Permission[];
    /** Photo metadata, if the item is a photo. Read-only. */
    photo?: Photo;
    /** Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only. */
    publication?: PublicationFacet;
    /** Remote item data, if the item is shared from a drive other than the one being accessed. Read-only. */
    remoteItem?: RemoteItem;
    /** If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive. */
    root?: Root;
    /** Search metadata, if the item is from a search result. Read-only. */
    searchResult?: SearchResult;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
    shared?: Shared;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    sharepointIds?: SharepointIds;
    /** Size of the item in bytes. Read-only. */
    size?: number;
    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
    specialFolder?: SpecialFolder;
    /** The set of subscriptions on the item. Only supported on the root of a drive. */
    subscriptions?: Subscription[];
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable. */
    thumbnails?: ThumbnailSet[];
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable. */
    versions?: DriveItemVersion[];
    /** Video metadata, if the item is a video. Read-only. */
    video?: Video;
    /** WebDAV compatible URL for the item. */
    webDavUrl?: string;
    /** For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable. */
    workbook?: Workbook;
}
