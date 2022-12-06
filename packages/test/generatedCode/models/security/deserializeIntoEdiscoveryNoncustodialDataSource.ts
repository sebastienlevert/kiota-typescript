import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {deserializeIntoDataSourceContainer} from './deserializeIntoDataSourceContainer';
import {deserializeIntoEdiscoveryIndexOperation} from './deserializeIntoEdiscoveryIndexOperation';
import {EdiscoveryNoncustodialDataSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryNoncustodialDataSource(ediscoveryNoncustodialDataSource: EdiscoveryNoncustodialDataSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSourceContainer(ediscoveryNoncustodialDataSource),
        "dataSource": n => { ediscoveryNoncustodialDataSource.dataSource = n.getObject(deserializeIntoDataSource) as any ; },
        "lastIndexOperation": n => { ediscoveryNoncustodialDataSource.lastIndexOperation = n.getObject(deserializeIntoEdiscoveryIndexOperation) as any ; },
    }
}
