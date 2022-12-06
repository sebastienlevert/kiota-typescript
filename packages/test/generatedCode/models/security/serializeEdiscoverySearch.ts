import {DataSourceScopes} from './dataSourceScopes';
import {EdiscoverySearch} from './index';
import {serializeDataSource} from './serializeDataSource';
import {serializeEdiscoveryAddToReviewSetOperation} from './serializeEdiscoveryAddToReviewSetOperation';
import {serializeEdiscoveryEstimateOperation} from './serializeEdiscoveryEstimateOperation';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {serializeSearch} from './serializeSearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoverySearch(writer: SerializationWriter, ediscoverySearch: EdiscoverySearch | undefined = {}) : void {
        serializeSearch(writer, ediscoverySearch)
            writer.writeCollectionOfObjectValuesFromMethod("additionalSources", ediscoverySearch.additionalSources as any, serializeDataSource);
            writer.writeObjectValueFromMethod("addToReviewSetOperation", ediscoverySearch.addToReviewSetOperation as any, serializeEdiscoveryAddToReviewSetOperation);
            writer.writeCollectionOfObjectValuesFromMethod("custodianSources", ediscoverySearch.custodianSources as any, serializeDataSource);
            writer.writeEnumValue<DataSourceScopes>("dataSourceScopes", ediscoverySearch.dataSourceScopes);
            writer.writeObjectValueFromMethod("lastEstimateStatisticsOperation", ediscoverySearch.lastEstimateStatisticsOperation as any, serializeEdiscoveryEstimateOperation);
            writer.writeCollectionOfObjectValuesFromMethod("noncustodialSources", ediscoverySearch.noncustodialSources as any, serializeEdiscoveryNoncustodialDataSource);
}
