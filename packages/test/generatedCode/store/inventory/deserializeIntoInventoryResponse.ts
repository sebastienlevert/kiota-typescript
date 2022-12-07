import {InventoryResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInventoryResponse(inventoryResponse: InventoryResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
