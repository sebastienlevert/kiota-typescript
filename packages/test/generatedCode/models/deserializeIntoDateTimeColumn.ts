import {DateTimeColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDateTimeColumn(dateTimeColumn: DateTimeColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayAs": n => { dateTimeColumn.displayAs = n.getStringValue() as any ; },
        "format": n => { dateTimeColumn.format = n.getStringValue() as any ; },
    }
}
