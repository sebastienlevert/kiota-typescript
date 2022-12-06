import {SubjectRightsRequestHistoryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubjectRightsRequestHistory} from './serializeSubjectRightsRequestHistory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestHistoryCollectionResponse(writer: SerializationWriter, subjectRightsRequestHistoryCollectionResponse: SubjectRightsRequestHistoryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subjectRightsRequestHistoryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subjectRightsRequestHistoryCollectionResponse.value as any, serializeSubjectRightsRequestHistory);
}
