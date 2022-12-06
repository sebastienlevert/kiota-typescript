import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConvertIdResult} from '../../models/deserializeIntoConvertIdResult';
import {TranslateExchangeIdsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslateExchangeIdsResponse(translateExchangeIdsResponse: TranslateExchangeIdsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(translateExchangeIdsResponse),
        "value": n => { translateExchangeIdsResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConvertIdResult) as any ; },
    }
}
