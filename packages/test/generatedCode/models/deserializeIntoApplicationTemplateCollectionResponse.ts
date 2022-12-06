import {deserializeIntoApplicationTemplate} from './deserializeIntoApplicationTemplate';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ApplicationTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationTemplateCollectionResponse(applicationTemplateCollectionResponse: ApplicationTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(applicationTemplateCollectionResponse),
        "value": n => { applicationTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApplicationTemplate) as any ; },
    }
}
