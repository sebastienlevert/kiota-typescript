import {Audio, BaseItem, Bundle, Deleted, DriveItemSource, DriveItemVersion, File, FileSystemInfo, Folder, GeoCoordinates, Image, ItemActivityOLD, ItemAnalytics, ListItem, Malware, Media, Package, PendingOperations, Permission, Photo, PublicationFacet, RemoteItem, Root, SearchResult, Shared, SharepointIds, SpecialFolder, Subscription, ThumbnailSet, Video, Workbook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItem extends BaseItem, Partial<Parsable> {
    /** The list of recent activities that took place on this item. */
    activities?: ItemActivityOLD[];
    /** The analytics property */
    analytics?: ItemAnalytics;
    /** The audio property */
    audio?: Audio;
    /** The bundle property */
    bundle?: Bundle;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
    children?: DriveItem[];
    /** The content stream, if the item represents a file. */
    content?: string;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
    cTag?: string;
    /** The deleted property */
    deleted?: Deleted;
    /** The file property */
    file?: File;
    /** The fileSystemInfo property */
    fileSystemInfo?: FileSystemInfo;
    /** The folder property */
    folder?: Folder;
    /** The image property */
    image?: Image;
    /** The listItem property */
    listItem?: ListItem;
    /** The location property */
    location?: GeoCoordinates;
    /** The malware property */
    malware?: Malware;
    /** The media property */
    media?: Media;
    /** The package property */
    package?: Package;
    /** The pendingOperations property */
    pendingOperations?: PendingOperations;
    /** The set of permissions for the item. Read-only. Nullable. */
    permissions?: Permission[];
    /** The photo property */
    photo?: Photo;
    /** The publication property */
    publication?: PublicationFacet;
    /** The remoteItem property */
    remoteItem?: RemoteItem;
    /** The root property */
    root?: Root;
    /** The searchResult property */
    searchResult?: SearchResult;
    /** The shared property */
    shared?: Shared;
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** Size of the item in bytes. Read-only. */
    size?: number;
    /** The source property */
    source?: DriveItemSource;
    /** The specialFolder property */
    specialFolder?: SpecialFolder;
    /** The set of subscriptions on the item. Only supported on the root of a drive. */
    subscriptions?: Subscription[];
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable. */
    thumbnails?: ThumbnailSet[];
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable. */
    versions?: DriveItemVersion[];
    /** The video property */
    video?: Video;
    /** WebDAV compatible URL for the item. */
    webDavUrl?: string;
    /** The workbook property */
    workbook?: Workbook;
}
