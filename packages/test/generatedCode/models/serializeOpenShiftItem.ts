import {OpenShiftItem} from './index';
import {serializeShiftItem} from './serializeShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftItem(writer: SerializationWriter, openShiftItem: OpenShiftItem | undefined = {}) : void {
        serializeShiftItem(writer, openShiftItem)
            writer.writeNumberValue("openSlotCount", openShiftItem.openSlotCount);
}
