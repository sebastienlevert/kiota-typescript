import {BaseCollectionPaginationCountResponse, ChecklistItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChecklistItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChecklistItem[];
}
