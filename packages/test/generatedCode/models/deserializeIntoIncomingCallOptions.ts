import {deserializeIntoCallOptions} from './deserializeIntoCallOptions';
import {IncomingCallOptions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncomingCallOptions(incomingCallOptions: IncomingCallOptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCallOptions(incomingCallOptions),
    }
}
