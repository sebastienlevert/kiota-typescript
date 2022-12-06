import {EdiscoveryHoldOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryHoldOperation(writer: SerializationWriter, ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryHoldOperation)
}
