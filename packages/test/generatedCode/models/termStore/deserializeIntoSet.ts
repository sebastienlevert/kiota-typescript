import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoKeyValue} from '../deserializeIntoKeyValue';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoLocalizedName} from './deserializeIntoLocalizedName';
import {deserializeIntoRelation} from './deserializeIntoRelation';
import {deserializeIntoTerm} from './deserializeIntoTerm';
import {Set} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSet(set: Set | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(set),
        "children": n => { set.children = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTerm) as any ; },
        "createdDateTime": n => { set.createdDateTime = n.getDateValue() as any ; },
        "description": n => { set.description = n.getStringValue() as any ; },
        "localizedNames": n => { set.localizedNames = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedName) as any ; },
        "parentGroup": n => { set.parentGroup = n.getObject(deserializeIntoGroup) as any ; },
        "properties": n => { set.properties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValue) as any ; },
        "relations": n => { set.relations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelation) as any ; },
        "terms": n => { set.terms = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTerm) as any ; },
    }
}
