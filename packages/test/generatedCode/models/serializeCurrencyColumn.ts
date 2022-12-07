import {CurrencyColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCurrencyColumn(writer: SerializationWriter, currencyColumn: CurrencyColumn | undefined = {}) : void {
            writer.writeStringValue("locale", currencyColumn.locale);
}
