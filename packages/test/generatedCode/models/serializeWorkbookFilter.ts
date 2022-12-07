import {WorkbookFilter} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookFilterCriteria} from './serializeWorkbookFilterCriteria';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFilter(writer: SerializationWriter, workbookFilter: WorkbookFilter | undefined = {}) : void {
        serializeEntity(writer, workbookFilter)
            writer.writeObjectValueFromMethod("criteria", workbookFilter.criteria as any, serializeWorkbookFilterCriteria);
}
