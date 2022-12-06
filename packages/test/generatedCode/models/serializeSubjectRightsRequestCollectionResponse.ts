import {SubjectRightsRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubjectRightsRequest} from './serializeSubjectRightsRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestCollectionResponse(writer: SerializationWriter, subjectRightsRequestCollectionResponse: SubjectRightsRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subjectRightsRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subjectRightsRequestCollectionResponse.value as any, serializeSubjectRightsRequest);
}
