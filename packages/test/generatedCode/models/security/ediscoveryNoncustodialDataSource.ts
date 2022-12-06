import {DataSource, DataSourceContainer, EdiscoveryIndexOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSource extends DataSourceContainer, Partial<Parsable> {
    /** User source or SharePoint site data source as non-custodial data source. */
    dataSource?: DataSource;
    /** Operation entity that represents the latest indexing for the non-custodial data source. */
    lastIndexOperation?: EdiscoveryIndexOperation;
}
