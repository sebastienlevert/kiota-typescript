import {BaseCollectionPaginationCountResponse} from '../';
import {DataSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DataSource[];
}
