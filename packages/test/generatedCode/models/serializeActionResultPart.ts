import {ActionResultPart} from './index';
import {serializePublicError} from './serializePublicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActionResultPart(writer: SerializationWriter, actionResultPart: ActionResultPart | undefined = {}) : void {
            writer.writeObjectValueFromMethod("error_escaped", actionResultPart.error_escaped as any, serializePublicError);
            writer.writeStringValue("@odata.type", actionResultPart.odataType);
}
