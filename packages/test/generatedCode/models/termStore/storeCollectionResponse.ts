import {BaseCollectionPaginationCountResponse} from '../';
import {Store} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StoreCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Store[];
}
