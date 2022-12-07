import {PublicError} from './index';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {serializePublicInnerError} from './serializePublicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicError(writer: SerializationWriter, publicError: PublicError | undefined = {}) : void {
            writer.writeStringValue("code", publicError.code);
            writer.writeCollectionOfObjectValuesFromMethod("details", publicError.details as any, serializePublicErrorDetail);
            writer.writeObjectValueFromMethod("innerError", publicError.innerError as any, serializePublicInnerError);
            writer.writeStringValue("message", publicError.message);
            writer.writeStringValue("target", publicError.target);
}
