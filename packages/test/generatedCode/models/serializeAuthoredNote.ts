import {AuthoredNote} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNote(writer: SerializationWriter, authoredNote: AuthoredNote | undefined = {}) : void {
        serializeEntity(writer, authoredNote)
            writer.writeObjectValueFromMethod("author", authoredNote.author as any, serializeIdentity);
            writer.writeObjectValueFromMethod("content", authoredNote.content as any, serializeItemBody);
            writer.writeDateValue("createdDateTime", authoredNote.createdDateTime);
}
