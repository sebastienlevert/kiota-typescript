import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoverySearch} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoverySearchCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoverySearch[];
}
