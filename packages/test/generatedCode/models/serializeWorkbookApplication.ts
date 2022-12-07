import {WorkbookApplication} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookApplication(writer: SerializationWriter, workbookApplication: WorkbookApplication | undefined = {}) : void {
        serializeEntity(writer, workbookApplication)
            writer.writeStringValue("calculationMode", workbookApplication.calculationMode);
}
