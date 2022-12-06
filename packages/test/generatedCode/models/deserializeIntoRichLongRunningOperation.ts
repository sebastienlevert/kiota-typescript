import {deserializeIntoLongRunningOperation} from './deserializeIntoLongRunningOperation';
import {deserializeIntoPublicError} from './deserializeIntoPublicError';
import {RichLongRunningOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperation(richLongRunningOperation: RichLongRunningOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLongRunningOperation(richLongRunningOperation),
        "error": n => { richLongRunningOperation.error_escaped = n.getObject(deserializeIntoPublicError) as any ; },
        "percentageComplete": n => { richLongRunningOperation.percentageComplete = n.getNumberValue() as any ; },
        "resourceId": n => { richLongRunningOperation.resourceId = n.getStringValue() as any ; },
        "type": n => { richLongRunningOperation.type = n.getStringValue() as any ; },
    }
}
