import {BaseItem, ColumnDefinition, ContentType, Drive, ListInfo, ListItem, RichLongRunningOperation, SharepointIds, Subscription, SystemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface List extends BaseItem, Partial<Parsable> {
    /** The collection of field definitions for this list. */
    columns?: ColumnDefinition[];
    /** The collection of content types present in this list. */
    contentTypes?: ContentType[];
    /** The displayable title of the list. */
    displayName?: string;
    /** Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem]. */
    drive?: Drive;
    /** All items contained in the list. */
    items?: ListItem[];
    /** Provides additional details about the list. */
    list?: ListInfo;
    /** The collection of long-running operations on the list. */
    operations?: RichLongRunningOperation[];
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    sharepointIds?: SharepointIds;
    /** The set of subscriptions on the list. */
    subscriptions?: Subscription[];
    /** If present, indicates that this is a system-managed list. Read-only. */
    system?: SystemFacet;
}
