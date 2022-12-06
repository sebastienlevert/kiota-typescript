import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryIndexOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryIndexOperation(ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryIndexOperation),
    }
}
