import {WorkbookFunctionResult} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctionResult(writer: SerializationWriter, workbookFunctionResult: WorkbookFunctionResult | undefined = {}) : void {
        serializeEntity(writer, workbookFunctionResult)
            writer.writeStringValue("error", workbookFunctionResult.error_escaped);
            writer.writeObjectValueFromMethod("value", workbookFunctionResult.value as any, serializeJson);
}
