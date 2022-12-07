import {BaseItem, ColumnDefinition, ContentType, Drive, ItemActivityOLD, ListInfo, ListItem, RichLongRunningOperation, SharepointIds, Subscription, SystemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface List extends BaseItem, Partial<Parsable> {
    /** The recent activities that took place within this list. */
    activities?: ItemActivityOLD[];
    /** The columns property */
    columns?: ColumnDefinition[];
    /** The contentTypes property */
    contentTypes?: ContentType[];
    /** The displayable title of the list. */
    displayName?: string;
    /** The drive property */
    drive?: Drive;
    /** All items contained in the list. */
    items?: ListItem[];
    /** The list property */
    list?: ListInfo;
    /** The collection of long running operations for the list. */
    operations?: RichLongRunningOperation[];
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** The set of subscriptions on the list. */
    subscriptions?: Subscription[];
    /** The system property */
    system?: SystemFacet;
}
