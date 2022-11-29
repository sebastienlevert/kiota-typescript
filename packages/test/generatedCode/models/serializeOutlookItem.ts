import {Entity} from './entity';
import {OutlookItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookItem(writer: SerializationWriter, outlookItem: OutlookItem | undefined = {}) : void {
        serializeEntityInterface(outlookItem)
            writer.writeCollectionOfPrimitiveValues<string>("categories", outlookItem.categories);
            writer.writeStringValue("changeKey", outlookItem.changeKey);
            writer.writeDateValue("createdDateTime", outlookItem.createdDateTime);
            writer.writeDateValue("lastModifiedDateTime", outlookItem.lastModifiedDateTime);
}
