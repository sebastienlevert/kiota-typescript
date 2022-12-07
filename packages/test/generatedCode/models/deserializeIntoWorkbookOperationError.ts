import {WorkbookOperationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperationError(workbookOperationError: WorkbookOperationError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { workbookOperationError.code = n.getStringValue() as any ; },
        "innerError": n => { workbookOperationError.innerError = n.getObject(deserializeIntoWorkbookOperationError) as any ; },
        "message": n => { workbookOperationError.message = n.getStringValue() as any ; },
    }
}
