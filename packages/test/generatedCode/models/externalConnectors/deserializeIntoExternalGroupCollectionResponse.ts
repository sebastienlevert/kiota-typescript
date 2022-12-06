import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExternalGroup} from './deserializeIntoExternalGroup';
import {ExternalGroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalGroupCollectionResponse(externalGroupCollectionResponse: ExternalGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalGroupCollectionResponse),
        "value": n => { externalGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalGroup) as any ; },
    }
}
