import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoSet} from './deserializeIntoSet';
import {deserializeIntoTerm} from './deserializeIntoTerm';
import {Relation} from './index';
import {RelationType} from './relationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelation(relation: Relation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(relation),
        "fromTerm": n => { relation.fromTerm = n.getObject(deserializeIntoTerm) as any ; },
        "relationship": n => { relation.relationship = n.getEnumValue<RelationType>(RelationType) as any ; },
        "set": n => { relation.set = n.getObject(deserializeIntoSet) as any ; },
        "toTerm": n => { relation.toTerm = n.getObject(deserializeIntoTerm) as any ; },
    }
}
