import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocalizedLabel} from './deserializeIntoLocalizedLabel';
import {LocalizedLabelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedLabelCollectionResponse(localizedLabelCollectionResponse: LocalizedLabelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedLabelCollectionResponse),
        "value": n => { localizedLabelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedLabel) as any ; },
    }
}
