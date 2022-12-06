import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {EducationClassCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationClassCollectionResponse(educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationClassCollectionResponse),
        "value": n => { educationClassCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationClass) as any ; },
    }
}
