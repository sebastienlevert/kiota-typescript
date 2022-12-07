import {PublicInnerError} from './index';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicInnerError(writer: SerializationWriter, publicInnerError: PublicInnerError | undefined = {}) : void {
            writer.writeStringValue("code", publicInnerError.code);
            writer.writeCollectionOfObjectValuesFromMethod("details", publicInnerError.details as any, serializePublicErrorDetail);
            writer.writeStringValue("message", publicInnerError.message);
            writer.writeStringValue("target", publicInnerError.target);
}
