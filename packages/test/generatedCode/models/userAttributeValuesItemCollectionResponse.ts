import {BaseCollectionPaginationCountResponse, UserAttributeValuesItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserAttributeValuesItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserAttributeValuesItem[];
}
