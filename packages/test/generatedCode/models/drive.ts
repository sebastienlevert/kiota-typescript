import {BaseItem, DriveItem, IdentitySet, List, Quota, SharepointIds, SystemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Drive extends BaseItem, Partial<Parsable> {
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    bundles?: DriveItem[];
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    driveType?: string;
    /** The list of items the user is following. Only in OneDrive for Business. */
    following?: DriveItem[];
    /** All items contained in the drive. Read-only. Nullable. */
    items?: DriveItem[];
    /** For drives in SharePoint, the underlying document library list. Read-only. Nullable. */
    list?: List;
    /** Optional. The user account that owns the drive. Read-only. */
    owner?: IdentitySet;
    /** Optional. Information about the drive's storage space quota. Read-only. */
    quota?: Quota;
    /** The root folder of the drive. Read-only. */
    root?: DriveItem;
    /** The sharePointIds property */
    sharePointIds?: SharepointIds;
    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
    special?: DriveItem[];
    /** If present, indicates that this is a system-managed drive. Read-only. */
    system?: SystemFacet;
}
