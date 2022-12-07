import {WorkbookWorksheetProtection} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookWorksheetProtectionOptions} from './serializeWorkbookWorksheetProtectionOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetProtection(writer: SerializationWriter, workbookWorksheetProtection: WorkbookWorksheetProtection | undefined = {}) : void {
        serializeEntity(writer, workbookWorksheetProtection)
            writer.writeObjectValueFromMethod("options", workbookWorksheetProtection.options as any, serializeWorkbookWorksheetProtectionOptions);
            writer.writeBooleanValue("protected", workbookWorksheetProtection.protected);
}
