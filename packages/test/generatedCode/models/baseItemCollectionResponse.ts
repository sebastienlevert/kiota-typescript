import {BaseCollectionPaginationCountResponse, BaseItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BaseItem[];
}
