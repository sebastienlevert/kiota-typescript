import {ExchangeIdFormat} from '../../../models/exchangeIdFormat';
import {TranslateExchangeIdsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslateExchangeIdsPostRequestBody(writer: SerializationWriter, translateExchangeIdsPostRequestBody: TranslateExchangeIdsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("inputIds", translateExchangeIdsPostRequestBody.inputIds);
            writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", translateExchangeIdsPostRequestBody.sourceIdType);
            writer.writeEnumValue<ExchangeIdFormat>("targetIdType", translateExchangeIdsPostRequestBody.targetIdType);
}
