import {Operation} from './index';
import {OperationStatus} from './operationStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOperation(writer: SerializationWriter, operation: Operation | undefined = {}) : void {
        serializeEntity(writer, operation)
            writer.writeDateValue("createdDateTime", operation.createdDateTime);
            writer.writeDateValue("lastActionDateTime", operation.lastActionDateTime);
            writer.writeEnumValue<OperationStatus>("status", operation.status);
}
