import {EducationTeacher} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTeacher(writer: SerializationWriter, educationTeacher: EducationTeacher | undefined = {}) : void {
            writer.writeStringValue("externalId", educationTeacher.externalId);
            writer.writeStringValue("@odata.type", educationTeacher.odataType);
            writer.writeStringValue("teacherNumber", educationTeacher.teacherNumber);
}
