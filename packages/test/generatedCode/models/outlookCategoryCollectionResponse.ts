import {BaseCollectionPaginationCountResponse, OutlookCategory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OutlookCategory[];
}
