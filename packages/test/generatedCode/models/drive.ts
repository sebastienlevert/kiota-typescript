import {BaseItem, DriveItem, IdentitySet, ItemActivityOLD, List, Quota, SharepointIds, SystemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Drive extends BaseItem, Partial<Parsable> {
    /** The list of recent activities that took place under this drive. */
    activities?: ItemActivityOLD[];
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    bundles?: DriveItem[];
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    driveType?: string;
    /** The list of items the user is following. Only in OneDrive for Business. */
    following?: DriveItem[];
    /** All items contained in the drive. Read-only. Nullable. */
    items?: DriveItem[];
    /** The list property */
    list?: List;
    /** The owner property */
    owner?: IdentitySet;
    /** The quota property */
    quota?: Quota;
    /** The root property */
    root?: DriveItem;
    /** The sharePointIds property */
    sharePointIds?: SharepointIds;
    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
    special?: DriveItem[];
    /** The system property */
    system?: SystemFacet;
}
