import {EdiscoveryPurgeDataOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryPurgeDataOperation(writer: SerializationWriter, ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryPurgeDataOperation)
}
