import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoKeyValue} from '../deserializeIntoKeyValue';
import {deserializeIntoLocalizedDescription} from './deserializeIntoLocalizedDescription';
import {deserializeIntoLocalizedLabel} from './deserializeIntoLocalizedLabel';
import {deserializeIntoRelation} from './deserializeIntoRelation';
import {deserializeIntoSet} from './deserializeIntoSet';
import {Term} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTerm(term: Term | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(term),
        "children": n => { term.children = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTerm) as any ; },
        "createdDateTime": n => { term.createdDateTime = n.getDateValue() as any ; },
        "descriptions": n => { term.descriptions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedDescription) as any ; },
        "labels": n => { term.labels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedLabel) as any ; },
        "lastModifiedDateTime": n => { term.lastModifiedDateTime = n.getDateValue() as any ; },
        "properties": n => { term.properties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValue) as any ; },
        "relations": n => { term.relations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelation) as any ; },
        "set": n => { term.set = n.getObject(deserializeIntoSet) as any ; },
    }
}
