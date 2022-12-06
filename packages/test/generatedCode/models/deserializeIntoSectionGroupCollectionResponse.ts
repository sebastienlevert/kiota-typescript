import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {SectionGroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionGroupCollectionResponse(sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sectionGroupCollectionResponse),
        "value": n => { sectionGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSectionGroup) as any ; },
    }
}
