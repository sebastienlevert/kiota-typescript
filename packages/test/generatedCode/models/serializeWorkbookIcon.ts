import {WorkbookIcon} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookIcon(writer: SerializationWriter, workbookIcon: WorkbookIcon | undefined = {}) : void {
            writer.writeNumberValue("index", workbookIcon.index);
            writer.writeStringValue("set", workbookIcon.set);
}
