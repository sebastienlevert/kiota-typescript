import {BaseItem, ColumnDefinition, ContentType, Drive, ItemAnalytics, List, Onenote, Permission, PublicError, RichLongRunningOperation, Root, SharepointIds, SiteCollection} from './index';
import {Store} from './termStore/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Site extends BaseItem, Partial<Parsable> {
    /** Analytics about the view activities that took place in this site. */
    analytics?: ItemAnalytics;
    /** The collection of column definitions reusable across lists under this site. */
    columns?: ColumnDefinition[];
    /** The collection of content types defined for this site. */
    contentTypes?: ContentType[];
    /** The full title for the site. Read-only. */
    displayName?: string;
    /** The default drive (document library) for this site. */
    drive?: Drive;
    /** The collection of drives (document libraries) under this site. */
    drives?: Drive[];
    /** The error property */
    error_escaped?: PublicError;
    /** The externalColumns property */
    externalColumns?: ColumnDefinition[];
    /** Used to address any item contained in this site. This collection can't be enumerated. */
    items?: BaseItem[];
    /** The collection of lists under this site. */
    lists?: List[];
    /** Calls the OneNote service for notebook related operations. */
    onenote?: Onenote;
    /** The collection of long-running operations on the site. */
    operations?: RichLongRunningOperation[];
    /** The permissions associated with the site. Nullable. */
    permissions?: Permission[];
    /** If present, indicates that this is the root site in the site collection. Read-only. */
    root?: Root;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    sharepointIds?: SharepointIds;
    /** Provides details about the site's site collection. Available only on the root site. Read-only. */
    siteCollection?: SiteCollection;
    /** The collection of the sub-sites under this site. */
    sites?: Site[];
    /** The default termStore under this site. */
    termStore?: Store;
    /** The collection of termStores under this site. */
    termStores?: Store[];
}
