import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from './index';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryNoncustodialDataSourceCollectionResponse(writer: SerializationWriter, ediscoveryNoncustodialDataSourceCollectionResponse: EdiscoveryNoncustodialDataSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryNoncustodialDataSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryNoncustodialDataSourceCollectionResponse.value as any, serializeEdiscoveryNoncustodialDataSource);
}
