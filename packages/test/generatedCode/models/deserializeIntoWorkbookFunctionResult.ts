import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {WorkbookFunctionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFunctionResult(workbookFunctionResult: WorkbookFunctionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFunctionResult),
        "error": n => { workbookFunctionResult.error_escaped = n.getStringValue() as any ; },
        "value": n => { workbookFunctionResult.value = n.getObject(deserializeIntoJson) as any ; },
    }
}
