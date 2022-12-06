import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryHoldOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryHoldOperation(ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryHoldOperation),
    }
}
