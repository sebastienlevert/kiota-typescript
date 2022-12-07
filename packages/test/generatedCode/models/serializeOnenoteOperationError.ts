import {OnenoteOperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperationError(writer: SerializationWriter, onenoteOperationError: OnenoteOperationError | undefined = {}) : void {
            writer.writeStringValue("code", onenoteOperationError.code);
            writer.writeStringValue("message", onenoteOperationError.message);
}
