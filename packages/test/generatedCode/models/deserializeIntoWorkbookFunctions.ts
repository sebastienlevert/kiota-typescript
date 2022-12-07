import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookFunctions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFunctions(workbookFunctions: WorkbookFunctions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFunctions),
    }
}
