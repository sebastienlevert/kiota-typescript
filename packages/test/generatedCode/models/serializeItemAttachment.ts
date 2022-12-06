import {ItemAttachment} from './index';
import {serializeAttachment} from './serializeAttachment';
import {serializeOutlookItem} from './serializeOutlookItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAttachment(writer: SerializationWriter, itemAttachment: ItemAttachment | undefined = {}) : void {
        serializeAttachment(writer, itemAttachment)
            writer.writeObjectValueFromMethod("item", itemAttachment.item as any, serializeOutlookItem);
}
