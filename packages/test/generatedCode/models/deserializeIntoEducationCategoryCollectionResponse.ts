import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationCategory} from './deserializeIntoEducationCategory';
import {EducationCategoryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCategoryCollectionResponse(educationCategoryCollectionResponse: EducationCategoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationCategoryCollectionResponse),
        "value": n => { educationCategoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationCategory) as any ; },
    }
}
