import {deserializeIntoFilterOperand} from './deserializeIntoFilterOperand';
import {FilterClause} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterClause(filterClause: FilterClause | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "operatorName": n => { filterClause.operatorName = n.getStringValue() as any ; },
        "sourceOperandName": n => { filterClause.sourceOperandName = n.getStringValue() as any ; },
        "targetOperand": n => { filterClause.targetOperand = n.getObject(deserializeIntoFilterOperand) as any ; },
    }
}
