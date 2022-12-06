import {WorkbookRangeBorder} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeBorder(writer: SerializationWriter, workbookRangeBorder: WorkbookRangeBorder | undefined = {}) : void {
        serializeEntity(writer, workbookRangeBorder)
            writer.writeStringValue("color", workbookRangeBorder.color);
            writer.writeStringValue("sideIndex", workbookRangeBorder.sideIndex);
            writer.writeStringValue("style", workbookRangeBorder.style);
            writer.writeStringValue("weight", workbookRangeBorder.weight);
}
