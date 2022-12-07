import {File, FileSystemInfo, Folder, IdentitySet, Image, ItemReference, Package, Shared, SharepointIds, SpecialFolder, Video} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Date and time of item creation. Read-only. */
    createdDateTime?: Date;
    /** The file property */
    file?: File;
    /** The fileSystemInfo property */
    fileSystemInfo?: FileSystemInfo;
    /** The folder property */
    folder?: Folder;
    /** Unique identifier for the remote item in its drive. Read-only. */
    id?: string;
    /** The image property */
    image?: Image;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** Date and time the item was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** Optional. Filename of the remote item. Read-only. */
    name?: string;
    /** The package property */
    package?: Package;
    /** The parentReference property */
    parentReference?: ItemReference;
    /** The shared property */
    shared?: Shared;
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** Size of the remote item. Read-only. */
    size?: number;
    /** The specialFolder property */
    specialFolder?: SpecialFolder;
    /** The video property */
    video?: Video;
    /** DAV compatible URL for the item. */
    webDavUrl?: string;
    /** URL that displays the resource in the browser. Read-only. */
    webUrl?: string;
}
