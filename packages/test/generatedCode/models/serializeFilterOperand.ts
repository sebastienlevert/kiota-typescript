import {FilterOperand} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterOperand(writer: SerializationWriter, filterOperand: FilterOperand | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("values", filterOperand.values);
}
