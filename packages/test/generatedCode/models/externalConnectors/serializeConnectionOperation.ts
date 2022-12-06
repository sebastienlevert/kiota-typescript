import {serializeEntity} from '../serializeEntity';
import {serializePublicError} from '../serializePublicError';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {ConnectionOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectionOperation(writer: SerializationWriter, connectionOperation: ConnectionOperation | undefined = {}) : void {
        serializeEntity(writer, connectionOperation)
            writer.writeObjectValueFromMethod("error_escaped", connectionOperation.error_escaped as any, serializePublicError);
            writer.writeEnumValue<ConnectionOperationStatus>("status", connectionOperation.status);
}
