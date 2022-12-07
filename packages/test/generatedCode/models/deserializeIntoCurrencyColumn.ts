import {CurrencyColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCurrencyColumn(currencyColumn: CurrencyColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "locale": n => { currencyColumn.locale = n.getStringValue() as any ; },
    }
}
