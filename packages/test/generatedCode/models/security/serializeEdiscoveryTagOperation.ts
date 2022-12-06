import {EdiscoveryTagOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryTagOperation(writer: SerializationWriter, ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryTagOperation)
}
