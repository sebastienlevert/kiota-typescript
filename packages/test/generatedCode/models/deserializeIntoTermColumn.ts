import {TermColumn} from './index';
import {deserializeIntoSet} from './termStore/deserializeIntoSet';
import {deserializeIntoTerm} from './termStore/deserializeIntoTerm';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermColumn(termColumn: TermColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleValues": n => { termColumn.allowMultipleValues = n.getBooleanValue() as any ; },
        "parentTerm": n => { termColumn.parentTerm = n.getObject(deserializeIntoTerm) as any ; },
        "showFullyQualifiedName": n => { termColumn.showFullyQualifiedName = n.getBooleanValue() as any ; },
        "termSet": n => { termColumn.termSet = n.getObject(deserializeIntoSet) as any ; },
    }
}
