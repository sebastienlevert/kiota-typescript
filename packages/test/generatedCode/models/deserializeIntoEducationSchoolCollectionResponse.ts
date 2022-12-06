import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {EducationSchoolCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSchoolCollectionResponse(educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSchoolCollectionResponse),
        "value": n => { educationSchoolCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSchool) as any ; },
    }
}
