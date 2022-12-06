import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryTagOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryTagOperation(ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryTagOperation),
    }
}
