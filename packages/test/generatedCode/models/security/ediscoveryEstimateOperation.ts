import {CaseOperation, EdiscoverySearch} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryEstimateOperation extends CaseOperation, Partial<Parsable> {
    /** The estimated count of items for the search that matched the content query. */
    indexedItemCount?: number;
    /** The estimated size of items for the search that matched the content query. */
    indexedItemsSize?: number;
    /** The number of mailboxes that had search hits. */
    mailboxCount?: number;
    /** eDiscovery search. */
    search?: EdiscoverySearch;
    /** The number of mailboxes that had search hits. */
    siteCount?: number;
    /** The estimated count of unindexed items for the collection. */
    unindexedItemCount?: number;
    /** The estimated size of unindexed items for the collection. */
    unindexedItemsSize?: number;
}
