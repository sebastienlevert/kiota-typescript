import {CaseOperation, EdiscoveryReviewSet, EdiscoverySearch} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryAddToReviewSetOperation extends CaseOperation, Partial<Parsable> {
    /** eDiscovery review set to which items matching source collection query gets added. */
    reviewSet?: EdiscoveryReviewSet;
    /** eDiscovery search that gets added to review set. */
    search?: EdiscoverySearch;
}
