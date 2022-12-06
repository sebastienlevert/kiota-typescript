import {File, FileSystemInfo, Folder, IdentitySet, Image, ItemReference, Package, Shared, SharepointIds, SpecialFolder, Video} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identity of the user, device, and application which created the item. Read-only. */
    createdBy?: IdentitySet;
    /** Date and time of item creation. Read-only. */
    createdDateTime?: Date;
    /** Indicates that the remote item is a file. Read-only. */
    file?: File;
    /** Information about the remote item from the local file system. Read-only. */
    fileSystemInfo?: FileSystemInfo;
    /** Indicates that the remote item is a folder. Read-only. */
    folder?: Folder;
    /** Unique identifier for the remote item in its drive. Read-only. */
    id?: string;
    /** Image metadata, if the item is an image. Read-only. */
    image?: Image;
    /** Identity of the user, device, and application which last modified the item. Read-only. */
    lastModifiedBy?: IdentitySet;
    /** Date and time the item was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** Optional. Filename of the remote item. Read-only. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
    package?: Package;
    /** Properties of the parent of the remote item. Read-only. */
    parentReference?: ItemReference;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
    shared?: Shared;
    /** Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only. */
    sharepointIds?: SharepointIds;
    /** Size of the remote item. Read-only. */
    size?: number;
    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
    specialFolder?: SpecialFolder;
    /** Video metadata, if the item is a video. Read-only. */
    video?: Video;
    /** DAV compatible URL for the item. */
    webDavUrl?: string;
    /** URL that displays the resource in the browser. Read-only. */
    webUrl?: string;
}
