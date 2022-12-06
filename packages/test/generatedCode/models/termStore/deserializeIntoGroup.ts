import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoSet} from './deserializeIntoSet';
import {Group} from './index';
import {TermGroupScope} from './termGroupScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroup(group: Group | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(group),
        "createdDateTime": n => { group.createdDateTime = n.getDateValue() as any ; },
        "description": n => { group.description = n.getStringValue() as any ; },
        "displayName": n => { group.displayName = n.getStringValue() as any ; },
        "parentSiteId": n => { group.parentSiteId = n.getStringValue() as any ; },
        "scope": n => { group.scope = n.getEnumValue<TermGroupScope>(TermGroupScope) as any ; },
        "sets": n => { group.sets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSet) as any ; },
    }
}
