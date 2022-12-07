import {GenericError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGenericError(writer: SerializationWriter, genericError: GenericError | undefined = {}) : void {
            writer.writeStringValue("code", genericError.code);
            writer.writeStringValue("message", genericError.message);
}
