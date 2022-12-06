import {ExchangeIdFormat} from '../../../models/exchangeIdFormat';
import {TranslateExchangeIdsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslateExchangeIdsPostRequestBody(translateExchangeIdsPostRequestBody: TranslateExchangeIdsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "inputIds": n => { translateExchangeIdsPostRequestBody.inputIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sourceIdType": n => { translateExchangeIdsPostRequestBody.sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat) as any ; },
        "targetIdType": n => { translateExchangeIdsPostRequestBody.targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat) as any ; },
    }
}
