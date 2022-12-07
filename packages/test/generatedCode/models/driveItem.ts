import {createAudioFromDiscriminatorValue} from './createAudioFromDiscriminatorValue';
import {createBundleFromDiscriminatorValue} from './createBundleFromDiscriminatorValue';
import {createDeletedFromDiscriminatorValue} from './createDeletedFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createDriveItemSourceFromDiscriminatorValue} from './createDriveItemSourceFromDiscriminatorValue';
import {createDriveItemVersionFromDiscriminatorValue} from './createDriveItemVersionFromDiscriminatorValue';
import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemActivityOLDFromDiscriminatorValue} from './createItemActivityOLDFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createMalwareFromDiscriminatorValue} from './createMalwareFromDiscriminatorValue';
import {createMediaFromDiscriminatorValue} from './createMediaFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createPendingOperationsFromDiscriminatorValue} from './createPendingOperationsFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createPhotoFromDiscriminatorValue} from './createPhotoFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {createRemoteItemFromDiscriminatorValue} from './createRemoteItemFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSearchResultFromDiscriminatorValue} from './createSearchResultFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {createWorkbookFromDiscriminatorValue} from './createWorkbookFromDiscriminatorValue';
import {Audio, BaseItem, Bundle, Deleted, DriveItemSource, DriveItemVersion, File, FileSystemInfo, Folder, GeoCoordinates, Image, ItemActivityOLD, ItemAnalytics, ListItem, Malware, Media, Package, PendingOperations, Permission, Photo, PublicationFacet, RemoteItem, Root, SearchResult, Shared, SharepointIds, SpecialFolder, Subscription, ThumbnailSet, Video, Workbook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItem extends BaseItem implements Parsable {
    /** The list of recent activities that took place on this item. */
    private _activities?: ItemActivityOLD[] | undefined;
    /** The analytics property */
    private _analytics?: ItemAnalytics | undefined;
    /** The audio property */
    private _audio?: Audio | undefined;
    /** The bundle property */
    private _bundle?: Bundle | undefined;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
    private _children?: DriveItem[] | undefined;
    /** The content stream, if the item represents a file. */
    private _content?: string | undefined;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
    private _cTag?: string | undefined;
    /** The deleted property */
    private _deleted?: Deleted | undefined;
    /** The file property */
    private _file?: File | undefined;
    /** The fileSystemInfo property */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** The folder property */
    private _folder?: Folder | undefined;
    /** The image property */
    private _image?: Image | undefined;
    /** The listItem property */
    private _listItem?: ListItem | undefined;
    /** The location property */
    private _location?: GeoCoordinates | undefined;
    /** The malware property */
    private _malware?: Malware | undefined;
    /** The media property */
    private _media?: Media | undefined;
    /** The package property */
    private _package?: Package | undefined;
    /** The pendingOperations property */
    private _pendingOperations?: PendingOperations | undefined;
    /** The set of permissions for the item. Read-only. Nullable. */
    private _permissions?: Permission[] | undefined;
    /** The photo property */
    private _photo?: Photo | undefined;
    /** The publication property */
    private _publication?: PublicationFacet | undefined;
    /** The remoteItem property */
    private _remoteItem?: RemoteItem | undefined;
    /** The root property */
    private _root?: Root | undefined;
    /** The searchResult property */
    private _searchResult?: SearchResult | undefined;
    /** The shared property */
    private _shared?: Shared | undefined;
    /** The sharepointIds property */
    private _sharepointIds?: SharepointIds | undefined;
    /** Size of the item in bytes. Read-only. */
    private _size?: number | undefined;
    /** The source property */
    private _source?: DriveItemSource | undefined;
    /** The specialFolder property */
    private _specialFolder?: SpecialFolder | undefined;
    /** The set of subscriptions on the item. Only supported on the root of a drive. */
    private _subscriptions?: Subscription[] | undefined;
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable. */
    private _thumbnails?: ThumbnailSet[] | undefined;
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable. */
    private _versions?: DriveItemVersion[] | undefined;
    /** The video property */
    private _video?: Video | undefined;
    /** WebDAV compatible URL for the item. */
    private _webDavUrl?: string | undefined;
    /** The workbook property */
    private _workbook?: Workbook | undefined;
    /**
     * Gets the activities property value. The list of recent activities that took place on this item.
     * @returns a itemActivityOLD
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. The list of recent activities that took place on this item.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ItemActivityOLD[] | undefined) {
        this._activities = value;
    };
    /**
     * Gets the analytics property value. The analytics property
     * @returns a itemAnalytics
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. The analytics property
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        this._analytics = value;
    };
    /**
     * Gets the audio property value. The audio property
     * @returns a audio
     */
    public get audio() {
        return this._audio;
    };
    /**
     * Sets the audio property value. The audio property
     * @param value Value to set for the audio property.
     */
    public set audio(value: Audio | undefined) {
        this._audio = value;
    };
    /**
     * Gets the bundle property value. The bundle property
     * @returns a bundle
     */
    public get bundle() {
        return this._bundle;
    };
    /**
     * Sets the bundle property value. The bundle property
     * @param value Value to set for the bundle property.
     */
    public set bundle(value: Bundle | undefined) {
        this._bundle = value;
    };
    /**
     * Gets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @returns a driveItem
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @param value Value to set for the children property.
     */
    public set children(value: DriveItem[] | undefined) {
        this._children = value;
    };
    /**
     * Instantiates a new driveItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content stream, if the item represents a file.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content stream, if the item represents a file.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @returns a string
     */
    public get cTag() {
        return this._cTag;
    };
    /**
     * Sets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @param value Value to set for the cTag property.
     */
    public set cTag(value: string | undefined) {
        this._cTag = value;
    };
    /**
     * Gets the deleted property value. The deleted property
     * @returns a deleted
     */
    public get deleted() {
        return this._deleted;
    };
    /**
     * Sets the deleted property value. The deleted property
     * @param value Value to set for the deleted property.
     */
    public set deleted(value: Deleted | undefined) {
        this._deleted = value;
    };
    /**
     * Gets the file property value. The file property
     * @returns a file
     */
    public get file() {
        return this._file;
    };
    /**
     * Sets the file property value. The file property
     * @param value Value to set for the file property.
     */
    public set file(value: File | undefined) {
        this._file = value;
    };
    /**
     * Gets the fileSystemInfo property value. The fileSystemInfo property
     * @returns a fileSystemInfo
     */
    public get fileSystemInfo() {
        return this._fileSystemInfo;
    };
    /**
     * Sets the fileSystemInfo property value. The fileSystemInfo property
     * @param value Value to set for the fileSystemInfo property.
     */
    public set fileSystemInfo(value: FileSystemInfo | undefined) {
        this._fileSystemInfo = value;
    };
    /**
     * Gets the folder property value. The folder property
     * @returns a folder
     */
    public get folder() {
        return this._folder;
    };
    /**
     * Sets the folder property value. The folder property
     * @param value Value to set for the folder property.
     */
    public set folder(value: Folder | undefined) {
        this._folder = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activities": n => { this.activities = n.getCollectionOfObjectValues<ItemActivityOLD>(createItemActivityOLDFromDiscriminatorValue); },
            "analytics": n => { this.analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); },
            "audio": n => { this.audio = n.getObjectValue<Audio>(createAudioFromDiscriminatorValue); },
            "bundle": n => { this.bundle = n.getObjectValue<Bundle>(createBundleFromDiscriminatorValue); },
            "children": n => { this.children = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "content": n => { this.content = n.getStringValue(); },
            "cTag": n => { this.cTag = n.getStringValue(); },
            "deleted": n => { this.deleted = n.getObjectValue<Deleted>(createDeletedFromDiscriminatorValue); },
            "file": n => { this.file = n.getObjectValue<File>(createFileFromDiscriminatorValue); },
            "fileSystemInfo": n => { this.fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); },
            "folder": n => { this.folder = n.getObjectValue<Folder>(createFolderFromDiscriminatorValue); },
            "image": n => { this.image = n.getObjectValue<Image>(createImageFromDiscriminatorValue); },
            "listItem": n => { this.listItem = n.getObjectValue<ListItem>(createListItemFromDiscriminatorValue); },
            "location": n => { this.location = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
            "malware": n => { this.malware = n.getObjectValue<Malware>(createMalwareFromDiscriminatorValue); },
            "media": n => { this.media = n.getObjectValue<Media>(createMediaFromDiscriminatorValue); },
            "package": n => { this.package = n.getObjectValue<Package>(createPackageFromDiscriminatorValue); },
            "pendingOperations": n => { this.pendingOperations = n.getObjectValue<PendingOperations>(createPendingOperationsFromDiscriminatorValue); },
            "permissions": n => { this.permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<Photo>(createPhotoFromDiscriminatorValue); },
            "publication": n => { this.publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
            "remoteItem": n => { this.remoteItem = n.getObjectValue<RemoteItem>(createRemoteItemFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
            "searchResult": n => { this.searchResult = n.getObjectValue<SearchResult>(createSearchResultFromDiscriminatorValue); },
            "shared": n => { this.shared = n.getObjectValue<Shared>(createSharedFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "source": n => { this.source = n.getObjectValue<DriveItemSource>(createDriveItemSourceFromDiscriminatorValue); },
            "specialFolder": n => { this.specialFolder = n.getObjectValue<SpecialFolder>(createSpecialFolderFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
            "thumbnails": n => { this.thumbnails = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); },
            "versions": n => { this.versions = n.getCollectionOfObjectValues<DriveItemVersion>(createDriveItemVersionFromDiscriminatorValue); },
            "video": n => { this.video = n.getObjectValue<Video>(createVideoFromDiscriminatorValue); },
            "webDavUrl": n => { this.webDavUrl = n.getStringValue(); },
            "workbook": n => { this.workbook = n.getObjectValue<Workbook>(createWorkbookFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the image property value. The image property
     * @returns a image
     */
    public get image() {
        return this._image;
    };
    /**
     * Sets the image property value. The image property
     * @param value Value to set for the image property.
     */
    public set image(value: Image | undefined) {
        this._image = value;
    };
    /**
     * Gets the listItem property value. The listItem property
     * @returns a listItem
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Sets the listItem property value. The listItem property
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        this._listItem = value;
    };
    /**
     * Gets the location property value. The location property
     * @returns a geoCoordinates
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: GeoCoordinates | undefined) {
        this._location = value;
    };
    /**
     * Gets the malware property value. The malware property
     * @returns a malware
     */
    public get malware() {
        return this._malware;
    };
    /**
     * Sets the malware property value. The malware property
     * @param value Value to set for the malware property.
     */
    public set malware(value: Malware | undefined) {
        this._malware = value;
    };
    /**
     * Gets the media property value. The media property
     * @returns a media
     */
    public get media() {
        return this._media;
    };
    /**
     * Sets the media property value. The media property
     * @param value Value to set for the media property.
     */
    public set media(value: Media | undefined) {
        this._media = value;
    };
    /**
     * Gets the package property value. The package property
     * @returns a package
     */
    public get package() {
        return this._package;
    };
    /**
     * Sets the package property value. The package property
     * @param value Value to set for the package property.
     */
    public set package(value: Package | undefined) {
        this._package = value;
    };
    /**
     * Gets the pendingOperations property value. The pendingOperations property
     * @returns a pendingOperations
     */
    public get pendingOperations() {
        return this._pendingOperations;
    };
    /**
     * Sets the pendingOperations property value. The pendingOperations property
     * @param value Value to set for the pendingOperations property.
     */
    public set pendingOperations(value: PendingOperations | undefined) {
        this._pendingOperations = value;
    };
    /**
     * Gets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @returns a permission
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        this._permissions = value;
    };
    /**
     * Gets the photo property value. The photo property
     * @returns a photo
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The photo property
     * @param value Value to set for the photo property.
     */
    public set photo(value: Photo | undefined) {
        this._photo = value;
    };
    /**
     * Gets the publication property value. The publication property
     * @returns a publicationFacet
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. The publication property
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | undefined) {
        this._publication = value;
    };
    /**
     * Gets the remoteItem property value. The remoteItem property
     * @returns a remoteItem
     */
    public get remoteItem() {
        return this._remoteItem;
    };
    /**
     * Sets the remoteItem property value. The remoteItem property
     * @param value Value to set for the remoteItem property.
     */
    public set remoteItem(value: RemoteItem | undefined) {
        this._remoteItem = value;
    };
    /**
     * Gets the root property value. The root property
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. The root property
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Gets the searchResult property value. The searchResult property
     * @returns a searchResult
     */
    public get searchResult() {
        return this._searchResult;
    };
    /**
     * Sets the searchResult property value. The searchResult property
     * @param value Value to set for the searchResult property.
     */
    public set searchResult(value: SearchResult | undefined) {
        this._searchResult = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ItemActivityOLD>("activities", this.activities);
        writer.writeObjectValue<ItemAnalytics>("analytics", this.analytics);
        writer.writeObjectValue<Audio>("audio", this.audio);
        writer.writeObjectValue<Bundle>("bundle", this.bundle);
        writer.writeCollectionOfObjectValues<DriveItem>("children", this.children);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("cTag", this.cTag);
        writer.writeObjectValue<Deleted>("deleted", this.deleted);
        writer.writeObjectValue<File>("file", this.file);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", this.fileSystemInfo);
        writer.writeObjectValue<Folder>("folder", this.folder);
        writer.writeObjectValue<Image>("image", this.image);
        writer.writeObjectValue<ListItem>("listItem", this.listItem);
        writer.writeObjectValue<GeoCoordinates>("location", this.location);
        writer.writeObjectValue<Malware>("malware", this.malware);
        writer.writeObjectValue<Media>("media", this.media);
        writer.writeObjectValue<Package>("package", this.package);
        writer.writeObjectValue<PendingOperations>("pendingOperations", this.pendingOperations);
        writer.writeCollectionOfObjectValues<Permission>("permissions", this.permissions);
        writer.writeObjectValue<Photo>("photo", this.photo);
        writer.writeObjectValue<PublicationFacet>("publication", this.publication);
        writer.writeObjectValue<RemoteItem>("remoteItem", this.remoteItem);
        writer.writeObjectValue<Root>("root", this.root);
        writer.writeObjectValue<SearchResult>("searchResult", this.searchResult);
        writer.writeObjectValue<Shared>("shared", this.shared);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeNumberValue("size", this.size);
        writer.writeObjectValue<DriveItemSource>("source", this.source);
        writer.writeObjectValue<SpecialFolder>("specialFolder", this.specialFolder);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", this.subscriptions);
        writer.writeCollectionOfObjectValues<ThumbnailSet>("thumbnails", this.thumbnails);
        writer.writeCollectionOfObjectValues<DriveItemVersion>("versions", this.versions);
        writer.writeObjectValue<Video>("video", this.video);
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        writer.writeObjectValue<Workbook>("workbook", this.workbook);
    };
    /**
     * Gets the shared property value. The shared property
     * @returns a shared
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Sets the shared property value. The shared property
     * @param value Value to set for the shared property.
     */
    public set shared(value: Shared | undefined) {
        this._shared = value;
    };
    /**
     * Gets the sharepointIds property value. The sharepointIds property
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. The sharepointIds property
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Gets the size property value. Size of the item in bytes. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Size of the item in bytes. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the source property value. The source property
     * @returns a driveItemSource
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: DriveItemSource | undefined) {
        this._source = value;
    };
    /**
     * Gets the specialFolder property value. The specialFolder property
     * @returns a specialFolder
     */
    public get specialFolder() {
        return this._specialFolder;
    };
    /**
     * Sets the specialFolder property value. The specialFolder property
     * @param value Value to set for the specialFolder property.
     */
    public set specialFolder(value: SpecialFolder | undefined) {
        this._specialFolder = value;
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @returns a subscription
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        this._subscriptions = value;
    };
    /**
     * Gets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @returns a thumbnailSet
     */
    public get thumbnails() {
        return this._thumbnails;
    };
    /**
     * Sets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @param value Value to set for the thumbnails property.
     */
    public set thumbnails(value: ThumbnailSet[] | undefined) {
        this._thumbnails = value;
    };
    /**
     * Gets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @returns a driveItemVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @param value Value to set for the versions property.
     */
    public set versions(value: DriveItemVersion[] | undefined) {
        this._versions = value;
    };
    /**
     * Gets the video property value. The video property
     * @returns a video
     */
    public get video() {
        return this._video;
    };
    /**
     * Sets the video property value. The video property
     * @param value Value to set for the video property.
     */
    public set video(value: Video | undefined) {
        this._video = value;
    };
    /**
     * Gets the webDavUrl property value. WebDAV compatible URL for the item.
     * @returns a string
     */
    public get webDavUrl() {
        return this._webDavUrl;
    };
    /**
     * Sets the webDavUrl property value. WebDAV compatible URL for the item.
     * @param value Value to set for the webDavUrl property.
     */
    public set webDavUrl(value: string | undefined) {
        this._webDavUrl = value;
    };
    /**
     * Gets the workbook property value. The workbook property
     * @returns a workbook
     */
    public get workbook() {
        return this._workbook;
    };
    /**
     * Sets the workbook property value. The workbook property
     * @param value Value to set for the workbook property.
     */
    public set workbook(value: Workbook | undefined) {
        this._workbook = value;
    };
}
