import {EdiscoveryNoncustodialDataSource} from './index';
import {serializeDataSource} from './serializeDataSource';
import {serializeDataSourceContainer} from './serializeDataSourceContainer';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryNoncustodialDataSource(writer: SerializationWriter, ediscoveryNoncustodialDataSource: EdiscoveryNoncustodialDataSource | undefined = {}) : void {
        serializeDataSourceContainer(writer, ediscoveryNoncustodialDataSource)
            writer.writeObjectValueFromMethod("dataSource", ediscoveryNoncustodialDataSource.dataSource as any, serializeDataSource);
            writer.writeObjectValueFromMethod("lastIndexOperation", ediscoveryNoncustodialDataSource.lastIndexOperation as any, serializeEdiscoveryIndexOperation);
}
