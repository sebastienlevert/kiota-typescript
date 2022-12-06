import {ErrorDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErrorDetails(writer: SerializationWriter, errorDetails: ErrorDetails | undefined = {}) : void {
            writer.writeStringValue("code", errorDetails.code);
            writer.writeStringValue("message", errorDetails.message);
            writer.writeStringValue("target", errorDetails.target);
}
