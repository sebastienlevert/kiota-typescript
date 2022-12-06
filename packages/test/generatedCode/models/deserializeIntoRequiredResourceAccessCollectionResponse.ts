import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRequiredResourceAccess} from './deserializeIntoRequiredResourceAccess';
import {RequiredResourceAccessCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequiredResourceAccessCollectionResponse(requiredResourceAccessCollectionResponse: RequiredResourceAccessCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(requiredResourceAccessCollectionResponse),
        "value": n => { requiredResourceAccessCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRequiredResourceAccess) as any ; },
    }
}
