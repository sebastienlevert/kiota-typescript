import {RichLongRunningOperation} from './index';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {serializePublicError} from './serializePublicError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRichLongRunningOperation(writer: SerializationWriter, richLongRunningOperation: RichLongRunningOperation | undefined = {}) : void {
        serializeLongRunningOperation(writer, richLongRunningOperation)
            writer.writeObjectValueFromMethod("error_escaped", richLongRunningOperation.error_escaped as any, serializePublicError);
            writer.writeNumberValue("percentageComplete", richLongRunningOperation.percentageComplete);
            writer.writeStringValue("resourceId", richLongRunningOperation.resourceId);
            writer.writeStringValue("type", richLongRunningOperation.type);
}
