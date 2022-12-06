import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryPurgeDataOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryPurgeDataOperation(ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryPurgeDataOperation),
    }
}
