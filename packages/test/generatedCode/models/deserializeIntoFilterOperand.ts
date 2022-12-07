import {FilterOperand} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperand(filterOperand: FilterOperand | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { filterOperand.values = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
