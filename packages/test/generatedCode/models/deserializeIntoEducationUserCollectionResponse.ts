import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {EducationUserCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationUserCollectionResponse(educationUserCollectionResponse: EducationUserCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationUserCollectionResponse),
        "value": n => { educationUserCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationUser) as any ; },
    }
}
