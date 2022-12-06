import {AuthoredNoteCollectionResponse} from './index';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNoteCollectionResponse(writer: SerializationWriter, authoredNoteCollectionResponse: AuthoredNoteCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authoredNoteCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authoredNoteCollectionResponse.value as any, serializeAuthoredNote);
}
