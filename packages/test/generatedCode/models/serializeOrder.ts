import {Order} from './index';
import {Order_status} from './order_status';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrder(writer: SerializationWriter, order: Order | undefined = {}) : void {
            writer.writeBooleanValue("complete", order.complete);
            writer.writeNumberValue("id", order.id);
            writer.writeNumberValue("petId", order.petId);
            writer.writeNumberValue("quantity", order.quantity);
            writer.writeDateValue("shipDate", order.shipDate);
            writer.writeEnumValue<Order_status>("status", order.status);
}
