import {DataSourceScopes} from './dataSourceScopes';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {deserializeIntoEdiscoveryAddToReviewSetOperation} from './deserializeIntoEdiscoveryAddToReviewSetOperation';
import {deserializeIntoEdiscoveryEstimateOperation} from './deserializeIntoEdiscoveryEstimateOperation';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from './deserializeIntoEdiscoveryNoncustodialDataSource';
import {deserializeIntoSearch} from './deserializeIntoSearch';
import {EdiscoverySearch} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoverySearch(ediscoverySearch: EdiscoverySearch | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearch(ediscoverySearch),
        "additionalSources": n => { ediscoverySearch.additionalSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDataSource) as any ; },
        "addToReviewSetOperation": n => { ediscoverySearch.addToReviewSetOperation = n.getObject(deserializeIntoEdiscoveryAddToReviewSetOperation) as any ; },
        "custodianSources": n => { ediscoverySearch.custodianSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDataSource) as any ; },
        "dataSourceScopes": n => { ediscoverySearch.dataSourceScopes = n.getEnumValue<DataSourceScopes>(DataSourceScopes) as any ; },
        "lastEstimateStatisticsOperation": n => { ediscoverySearch.lastEstimateStatisticsOperation = n.getObject(deserializeIntoEdiscoveryEstimateOperation) as any ; },
        "noncustodialSources": n => { ediscoverySearch.noncustodialSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryNoncustodialDataSource) as any ; },
    }
}
