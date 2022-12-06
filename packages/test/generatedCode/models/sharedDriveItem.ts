import {BaseItem, DriveItem, IdentitySet, List, ListItem, Permission, Site} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedDriveItem extends BaseItem, Partial<Parsable> {
    /** Used to access the underlying driveItem */
    driveItem?: DriveItem;
    /** All driveItems contained in the sharing root. This collection cannot be enumerated. */
    items?: DriveItem[];
    /** Used to access the underlying list */
    list?: List;
    /** Used to access the underlying listItem */
    listItem?: ListItem;
    /** Information about the owner of the shared item being referenced. */
    owner?: IdentitySet;
    /** Used to access the permission representing the underlying sharing link */
    permission?: Permission;
    /** Used to access the underlying driveItem. Deprecated -- use driveItem instead. */
    root?: DriveItem;
    /** Used to access the underlying site */
    site?: Site;
}
