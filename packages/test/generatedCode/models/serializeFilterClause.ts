import {FilterClause} from './index';
import {serializeFilterOperand} from './serializeFilterOperand';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterClause(writer: SerializationWriter, filterClause: FilterClause | undefined = {}) : void {
            writer.writeStringValue("operatorName", filterClause.operatorName);
            writer.writeStringValue("sourceOperandName", filterClause.sourceOperandName);
            writer.writeObjectValueFromMethod("targetOperand", filterClause.targetOperand as any, serializeFilterOperand);
}
