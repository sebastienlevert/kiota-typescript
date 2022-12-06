import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookWorksheetProtectionOptions} from './deserializeIntoWorkbookWorksheetProtectionOptions';
import {WorkbookWorksheetProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetProtection(workbookWorksheetProtection: WorkbookWorksheetProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookWorksheetProtection),
        "options": n => { workbookWorksheetProtection.options = n.getObject(deserializeIntoWorkbookWorksheetProtectionOptions) as any ; },
        "protected": n => { workbookWorksheetProtection.protected = n.getBooleanValue() as any ; },
    }
}
