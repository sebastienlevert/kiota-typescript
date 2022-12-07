import {EducationalActivityDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationalActivityDetail(writer: SerializationWriter, educationalActivityDetail: EducationalActivityDetail | undefined = {}) : void {
            writer.writeStringValue("abbreviation", educationalActivityDetail.abbreviation);
            writer.writeCollectionOfPrimitiveValues<string>("activities", educationalActivityDetail.activities);
            writer.writeCollectionOfPrimitiveValues<string>("awards", educationalActivityDetail.awards);
            writer.writeStringValue("description", educationalActivityDetail.description);
            writer.writeStringValue("displayName", educationalActivityDetail.displayName);
            writer.writeCollectionOfPrimitiveValues<string>("fieldsOfStudy", educationalActivityDetail.fieldsOfStudy);
            writer.writeStringValue("grade", educationalActivityDetail.grade);
            writer.writeStringValue("notes", educationalActivityDetail.notes);
            writer.writeStringValue("webUrl", educationalActivityDetail.webUrl);
}
