import {SubjectSetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectSetCollectionResponse(writer: SerializationWriter, subjectSetCollectionResponse: SubjectSetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subjectSetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subjectSetCollectionResponse.value as any, serializeSubjectSet);
}
