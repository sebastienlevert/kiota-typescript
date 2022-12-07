import {Order} from './index';
import {Order_status} from './order_status';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrder(order: Order | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "complete": n => { order.complete = n.getBooleanValue() as any ; },
        "id": n => { order.id = n.getNumberValue() as any ; },
        "petId": n => { order.petId = n.getNumberValue() as any ; },
        "quantity": n => { order.quantity = n.getNumberValue() as any ; },
        "shipDate": n => { order.shipDate = n.getDateValue() as any ; },
        "status": n => { order.status = n.getEnumValue<Order_status>(Order_status) as any ; },
    }
}
