import {WorkbookFilterCriteria} from './index';
import {serializeJson} from './serializeJson';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFilterCriteria(writer: SerializationWriter, workbookFilterCriteria: WorkbookFilterCriteria | undefined = {}) : void {
            writer.writeStringValue("color", workbookFilterCriteria.color);
            writer.writeStringValue("criterion1", workbookFilterCriteria.criterion1);
            writer.writeStringValue("criterion2", workbookFilterCriteria.criterion2);
            writer.writeStringValue("dynamicCriteria", workbookFilterCriteria.dynamicCriteria);
            writer.writeStringValue("filterOn", workbookFilterCriteria.filterOn);
            writer.writeObjectValueFromMethod("icon", workbookFilterCriteria.icon as any, serializeWorkbookIcon);
            writer.writeStringValue("operator", workbookFilterCriteria.operator);
            writer.writeObjectValueFromMethod("values", workbookFilterCriteria.values as any, serializeJson);
}
