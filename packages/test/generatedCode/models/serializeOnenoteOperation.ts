import {OnenoteOperation} from './index';
import {serializeOnenoteOperationError} from './serializeOnenoteOperationError';
import {serializeOperation} from './serializeOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperation(writer: SerializationWriter, onenoteOperation: OnenoteOperation | undefined = {}) : void {
        serializeOperation(writer, onenoteOperation)
            writer.writeObjectValueFromMethod("error_escaped", onenoteOperation.error_escaped as any, serializeOnenoteOperationError);
            writer.writeStringValue("percentComplete", onenoteOperation.percentComplete);
            writer.writeStringValue("resourceId", onenoteOperation.resourceId);
            writer.writeStringValue("resourceLocation", onenoteOperation.resourceLocation);
}
