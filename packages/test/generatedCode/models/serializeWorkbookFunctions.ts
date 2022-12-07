import {WorkbookFunctions} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctions(writer: SerializationWriter, workbookFunctions: WorkbookFunctions | undefined = {}) : void {
        serializeEntity(writer, workbookFunctions)
}
