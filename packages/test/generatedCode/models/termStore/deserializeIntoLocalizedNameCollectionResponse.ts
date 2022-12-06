import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocalizedName} from './deserializeIntoLocalizedName';
import {LocalizedNameCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedNameCollectionResponse(localizedNameCollectionResponse: LocalizedNameCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedNameCollectionResponse),
        "value": n => { localizedNameCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedName) as any ; },
    }
}
