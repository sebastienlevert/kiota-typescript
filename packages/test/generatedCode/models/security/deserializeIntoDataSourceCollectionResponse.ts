import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {DataSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSourceCollectionResponse(dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(dataSourceCollectionResponse),
        "value": n => { dataSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDataSource) as any ; },
    }
}
