import {WorkbookWorksheetProtectionOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetProtectionOptions(workbookWorksheetProtectionOptions: WorkbookWorksheetProtectionOptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowAutoFilter": n => { workbookWorksheetProtectionOptions.allowAutoFilter = n.getBooleanValue() as any ; },
        "allowDeleteColumns": n => { workbookWorksheetProtectionOptions.allowDeleteColumns = n.getBooleanValue() as any ; },
        "allowDeleteRows": n => { workbookWorksheetProtectionOptions.allowDeleteRows = n.getBooleanValue() as any ; },
        "allowFormatCells": n => { workbookWorksheetProtectionOptions.allowFormatCells = n.getBooleanValue() as any ; },
        "allowFormatColumns": n => { workbookWorksheetProtectionOptions.allowFormatColumns = n.getBooleanValue() as any ; },
        "allowFormatRows": n => { workbookWorksheetProtectionOptions.allowFormatRows = n.getBooleanValue() as any ; },
        "allowInsertColumns": n => { workbookWorksheetProtectionOptions.allowInsertColumns = n.getBooleanValue() as any ; },
        "allowInsertHyperlinks": n => { workbookWorksheetProtectionOptions.allowInsertHyperlinks = n.getBooleanValue() as any ; },
        "allowInsertRows": n => { workbookWorksheetProtectionOptions.allowInsertRows = n.getBooleanValue() as any ; },
        "allowPivotTables": n => { workbookWorksheetProtectionOptions.allowPivotTables = n.getBooleanValue() as any ; },
        "allowSort": n => { workbookWorksheetProtectionOptions.allowSort = n.getBooleanValue() as any ; },
    }
}
