import {BaseCollectionPaginationCountResponse, MobileAppCategory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileAppCategory[];
}
