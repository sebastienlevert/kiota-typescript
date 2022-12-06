import {WorkbookOperation} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookOperationError} from './serializeWorkbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperation(writer: SerializationWriter, workbookOperation: WorkbookOperation | undefined = {}) : void {
        serializeEntity(writer, workbookOperation)
            writer.writeObjectValueFromMethod("error_escaped", workbookOperation.error_escaped as any, serializeWorkbookOperationError);
            writer.writeStringValue("resourceLocation", workbookOperation.resourceLocation);
            writer.writeEnumValue<WorkbookOperationStatus>("status", workbookOperation.status);
}
