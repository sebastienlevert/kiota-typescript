import {WorkbookRangeFill} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeFill(writer: SerializationWriter, workbookRangeFill: WorkbookRangeFill | undefined = {}) : void {
        serializeEntity(writer, workbookRangeFill)
            writer.writeStringValue("color", workbookRangeFill.color);
}
