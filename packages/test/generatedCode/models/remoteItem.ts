import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {File, FileSystemInfo, Folder, IdentitySet, Image, ItemReference, Package, Shared, SharepointIds, SpecialFolder, Video} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The createdBy property */
    private _createdBy?: IdentitySet | undefined;
    /** Date and time of item creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The file property */
    private _file?: File | undefined;
    /** The fileSystemInfo property */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** The folder property */
    private _folder?: Folder | undefined;
    /** Unique identifier for the remote item in its drive. Read-only. */
    private _id?: string | undefined;
    /** The image property */
    private _image?: Image | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the item was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Optional. Filename of the remote item. Read-only. */
    private _name?: string | undefined;
    /** The package property */
    private _package?: Package | undefined;
    /** The parentReference property */
    private _parentReference?: ItemReference | undefined;
    /** The shared property */
    private _shared?: Shared | undefined;
    /** The sharepointIds property */
    private _sharepointIds?: SharepointIds | undefined;
    /** Size of the remote item. Read-only. */
    private _size?: number | undefined;
    /** The specialFolder property */
    private _specialFolder?: SpecialFolder | undefined;
    /** The video property */
    private _video?: Video | undefined;
    /** DAV compatible URL for the item. */
    private _webDavUrl?: string | undefined;
    /** URL that displays the resource in the browser. Read-only. */
    private _webUrl?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new remoteItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Date and time of item creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of item creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
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
        return {
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "file": n => { this.file = n.getObjectValue<File>(createFileFromDiscriminatorValue); },
            "fileSystemInfo": n => { this.fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); },
            "folder": n => { this.folder = n.getObjectValue<Folder>(createFolderFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "image": n => { this.image = n.getObjectValue<Image>(createImageFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "package": n => { this.package = n.getObjectValue<Package>(createPackageFromDiscriminatorValue); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
            "shared": n => { this.shared = n.getObjectValue<Shared>(createSharedFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "specialFolder": n => { this.specialFolder = n.getObjectValue<SpecialFolder>(createSpecialFolderFromDiscriminatorValue); },
            "video": n => { this.video = n.getObjectValue<Video>(createVideoFromDiscriminatorValue); },
            "webDavUrl": n => { this.webDavUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Unique identifier for the remote item in its drive. Read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier for the remote item in its drive. Read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
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
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the name property value. Optional. Filename of the remote item. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Optional. Filename of the remote item. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the parentReference property value. The parentReference property
     * @returns a itemReference
     */
    public get parentReference() {
        return this._parentReference;
    };
    /**
     * Sets the parentReference property value. The parentReference property
     * @param value Value to set for the parentReference property.
     */
    public set parentReference(value: ItemReference | undefined) {
        this._parentReference = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<File>("file", this.file);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", this.fileSystemInfo);
        writer.writeObjectValue<Folder>("folder", this.folder);
        writer.writeStringValue("id", this.id);
        writer.writeObjectValue<Image>("image", this.image);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Package>("package", this.package);
        writer.writeObjectValue<ItemReference>("parentReference", this.parentReference);
        writer.writeObjectValue<Shared>("shared", this.shared);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeNumberValue("size", this.size);
        writer.writeObjectValue<SpecialFolder>("specialFolder", this.specialFolder);
        writer.writeObjectValue<Video>("video", this.video);
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
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
     * Gets the size property value. Size of the remote item. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Size of the remote item. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
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
     * Gets the webDavUrl property value. DAV compatible URL for the item.
     * @returns a string
     */
    public get webDavUrl() {
        return this._webDavUrl;
    };
    /**
     * Sets the webDavUrl property value. DAV compatible URL for the item.
     * @param value Value to set for the webDavUrl property.
     */
    public set webDavUrl(value: string | undefined) {
        this._webDavUrl = value;
    };
    /**
     * Gets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
