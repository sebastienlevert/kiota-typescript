import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryNoncustodialDataSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryNoncustodialDataSource[];
}
