import {WorkbookOperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperationError(writer: SerializationWriter, workbookOperationError: WorkbookOperationError | undefined = {}) : void {
            writer.writeStringValue("code", workbookOperationError.code);
            writer.writeObjectValueFromMethod("innerError", workbookOperationError.innerError as any, serializeWorkbookOperationError);
            writer.writeStringValue("message", workbookOperationError.message);
}
