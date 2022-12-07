import {OperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOperationError(writer: SerializationWriter, operationError: OperationError | undefined = {}) : void {
            writer.writeStringValue("code", operationError.code);
            writer.writeStringValue("message", operationError.message);
}
