import {BaseItem, ColumnDefinition, ContentType, Deleted, Drive, ItemAnalytics, List, Onenote, Permission, RichLongRunningOperation, Root, SharepointIds, SiteCollection, SitePage, SiteSettings} from './index';
import {Store} from './termStore/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Site extends BaseItem, Partial<Parsable> {
    /** The analytics property */
    analytics?: ItemAnalytics;
    /** The collection of column definitions reusable across lists under this site. */
    columns?: ColumnDefinition[];
    /** The collection of content types defined for this site. */
    contentTypes?: ContentType[];
    /** The deleted property */
    deleted?: Deleted;
    /** The full title for the site. Read-only. */
    displayName?: string;
    /** The drive property */
    drive?: Drive;
    /** The collection of drives (document libraries) under this site. */
    drives?: Drive[];
    /** The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site. */
    externalColumns?: ColumnDefinition[];
    /** Used to address any item contained in this site. This collection cannot be enumerated. */
    items?: BaseItem[];
    /** The collection of lists under this site. */
    lists?: List[];
    /** The onenote property */
    onenote?: Onenote;
    /** The collection of long running operations for the site. */
    operations?: RichLongRunningOperation[];
    /** The collection of pages in the SitePages list in this site. */
    pages?: SitePage[];
    /** The permissions associated with the site. Nullable. */
    permissions?: Permission[];
    /** The root property */
    root?: Root;
    /** The settings property */
    settings?: SiteSettings;
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** The siteCollection property */
    siteCollection?: SiteCollection;
    /** The collection of the sub-sites under this site. */
    sites?: Site[];
    /** The termStore property */
    termStore?: Store;
}
