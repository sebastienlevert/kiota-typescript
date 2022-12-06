import {ConvertIdResult} from './index';
import {serializeGenericError} from './serializeGenericError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConvertIdResult(writer: SerializationWriter, convertIdResult: ConvertIdResult | undefined = {}) : void {
            writer.writeObjectValueFromMethod("errorDetails", convertIdResult.errorDetails as any, serializeGenericError);
            writer.writeStringValue("@odata.type", convertIdResult.odataType);
            writer.writeStringValue("sourceId", convertIdResult.sourceId);
            writer.writeStringValue("targetId", convertIdResult.targetId);
}
