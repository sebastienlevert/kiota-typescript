import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocalizedDescription} from './deserializeIntoLocalizedDescription';
import {LocalizedDescriptionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedDescriptionCollectionResponse(localizedDescriptionCollectionResponse: LocalizedDescriptionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedDescriptionCollectionResponse),
        "value": n => { localizedDescriptionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedDescription) as any ; },
    }
}
