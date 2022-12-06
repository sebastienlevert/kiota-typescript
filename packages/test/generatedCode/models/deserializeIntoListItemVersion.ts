import {deserializeIntoBaseItemVersion} from './deserializeIntoBaseItemVersion';
import {deserializeIntoFieldValueSet} from './deserializeIntoFieldValueSet';
import {ListItemVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemVersion(listItemVersion: ListItemVersion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItemVersion(listItemVersion),
        "fields": n => { listItemVersion.fields = n.getObject(deserializeIntoFieldValueSet) as any ; },
    }
}
