import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoSet} from './deserializeIntoSet';
import {Store} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStore(store: Store | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(store),
        "defaultLanguageTag": n => { store.defaultLanguageTag = n.getStringValue() as any ; },
        "groups": n => { store.groups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroup) as any ; },
        "languageTags": n => { store.languageTags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sets": n => { store.sets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSet) as any ; },
    }
}
