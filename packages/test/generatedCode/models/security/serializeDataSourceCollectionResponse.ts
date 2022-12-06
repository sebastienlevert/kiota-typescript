import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {DataSourceCollectionResponse} from './index';
import {serializeDataSource} from './serializeDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSourceCollectionResponse(writer: SerializationWriter, dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", dataSourceCollectionResponse.value as any, serializeDataSource);
}
