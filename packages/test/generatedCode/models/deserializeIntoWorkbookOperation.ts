import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookOperationError} from './deserializeIntoWorkbookOperationError';
import {WorkbookOperation} from './index';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperation(workbookOperation: WorkbookOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookOperation),
        "error": n => { workbookOperation.error_escaped = n.getObject(deserializeIntoWorkbookOperationError) as any ; },
        "resourceLocation": n => { workbookOperation.resourceLocation = n.getStringValue() as any ; },
        "status": n => { workbookOperation.status = n.getEnumValue<WorkbookOperationStatus>(WorkbookOperationStatus) as any ; },
    }
}
