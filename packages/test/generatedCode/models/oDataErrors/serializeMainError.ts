import {MainError} from './index';
import {serializeErrorDetails} from './serializeErrorDetails';
import {serializeInnerError} from './serializeInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMainError(writer: SerializationWriter, mainError: MainError | undefined = {}) : void {
            writer.writeStringValue("code", mainError.code);
            writer.writeCollectionOfObjectValuesFromMethod("details", mainError.details as any, serializeErrorDetails);
            writer.writeObjectValueFromMethod("innererror", mainError.innererror as any, serializeInnerError);
            writer.writeStringValue("message", mainError.message);
            writer.writeStringValue("target", mainError.target);
}
