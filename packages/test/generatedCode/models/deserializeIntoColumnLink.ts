import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ColumnLink} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnLink(columnLink: ColumnLink | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(columnLink),
        "name": n => { columnLink.name = n.getStringValue() as any ; },
    }
}
