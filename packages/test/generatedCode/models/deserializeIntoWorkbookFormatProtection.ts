import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookFormatProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFormatProtection(workbookFormatProtection: WorkbookFormatProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFormatProtection),
        "formulaHidden": n => { workbookFormatProtection.formulaHidden = n.getBooleanValue() as any ; },
        "locked": n => { workbookFormatProtection.locked = n.getBooleanValue() as any ; },
    }
}
