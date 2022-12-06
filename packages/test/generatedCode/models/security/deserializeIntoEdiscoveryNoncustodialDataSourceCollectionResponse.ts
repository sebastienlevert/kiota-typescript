import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from './deserializeIntoEdiscoveryNoncustodialDataSource';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse(ediscoveryNoncustodialDataSourceCollectionResponse: EdiscoveryNoncustodialDataSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryNoncustodialDataSourceCollectionResponse),
        "value": n => { ediscoveryNoncustodialDataSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryNoncustodialDataSource) as any ; },
    }
}
