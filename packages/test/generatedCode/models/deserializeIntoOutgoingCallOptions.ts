import {deserializeIntoCallOptions} from './deserializeIntoCallOptions';
import {OutgoingCallOptions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutgoingCallOptions(outgoingCallOptions: OutgoingCallOptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCallOptions(outgoingCallOptions),
    }
}
