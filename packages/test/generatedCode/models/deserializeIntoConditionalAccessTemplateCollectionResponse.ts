import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConditionalAccessTemplate} from './deserializeIntoConditionalAccessTemplate';
import {ConditionalAccessTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessTemplateCollectionResponse(conditionalAccessTemplateCollectionResponse: ConditionalAccessTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conditionalAccessTemplateCollectionResponse),
        "value": n => { conditionalAccessTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConditionalAccessTemplate) as any ; },
    }
}
