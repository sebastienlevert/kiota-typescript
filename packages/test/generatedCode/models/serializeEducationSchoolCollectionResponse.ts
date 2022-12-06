import {EducationSchoolCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSchool} from './serializeEducationSchool';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSchoolCollectionResponse(writer: SerializationWriter, educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSchoolCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationSchoolCollectionResponse.value as any, serializeEducationSchool);
}
