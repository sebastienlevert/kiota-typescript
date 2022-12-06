import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeConvertIdResult} from '../../models/serializeConvertIdResult';
import {TranslateExchangeIdsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslateExchangeIdsResponse(writer: SerializationWriter, translateExchangeIdsResponse: TranslateExchangeIdsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, translateExchangeIdsResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", translateExchangeIdsResponse.value as any, serializeConvertIdResult);
}
