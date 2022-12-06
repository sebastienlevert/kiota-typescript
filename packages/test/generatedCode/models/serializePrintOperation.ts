import {PrintOperation} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrintOperationStatus} from './serializePrintOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperation(writer: SerializationWriter, printOperation: PrintOperation | undefined = {}) : void {
        serializeEntity(writer, printOperation)
            writer.writeDateValue("createdDateTime", printOperation.createdDateTime);
            writer.writeObjectValueFromMethod("status", printOperation.status as any, serializePrintOperationStatus);
}
