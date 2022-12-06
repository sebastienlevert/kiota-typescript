import {EdiscoveryIndexOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryIndexOperation(writer: SerializationWriter, ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryIndexOperation)
}
