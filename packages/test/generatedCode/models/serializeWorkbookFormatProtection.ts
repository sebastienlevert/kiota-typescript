import {WorkbookFormatProtection} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFormatProtection(writer: SerializationWriter, workbookFormatProtection: WorkbookFormatProtection | undefined = {}) : void {
        serializeEntity(writer, workbookFormatProtection)
            writer.writeBooleanValue("formulaHidden", workbookFormatProtection.formulaHidden);
            writer.writeBooleanValue("locked", workbookFormatProtection.locked);
}
