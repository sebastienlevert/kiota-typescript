import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {AuthoredNote} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthoredNote(authoredNote: AuthoredNote | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authoredNote),
        "author": n => { authoredNote.author = n.getObject(deserializeIntoIdentity) as any ; },
        "content": n => { authoredNote.content = n.getObject(deserializeIntoItemBody) as any ; },
        "createdDateTime": n => { authoredNote.createdDateTime = n.getDateValue() as any ; },
    }
}
