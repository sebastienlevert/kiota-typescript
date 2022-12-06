import {DataSourceScopes} from './dataSourceScopes';
import {DataSource, EdiscoveryAddToReviewSetOperation, EdiscoveryEstimateOperation, EdiscoveryNoncustodialDataSource, Search} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoverySearch extends Partial<Parsable>, Search {
    /** Adds an additional source to the eDiscovery search. */
    additionalSources?: DataSource[];
    /** Adds the results of the eDiscovery search to the specified reviewSet. */
    addToReviewSetOperation?: EdiscoveryAddToReviewSetOperation;
    /** Custodian sources that are included in the eDiscovery search. */
    custodianSources?: DataSource[];
    /** When specified, the collection will span across a service for an entire workload. Possible values are: none, allTenantMailboxes, allTenantSites, allCaseCustodians, allCaseNoncustodialDataSources. */
    dataSourceScopes?: DataSourceScopes;
    /** The last estimate operation associated with the eDiscovery search. */
    lastEstimateStatisticsOperation?: EdiscoveryEstimateOperation;
    /** noncustodialDataSource sources that are included in the eDiscovery search */
    noncustodialSources?: EdiscoveryNoncustodialDataSource[];
}
