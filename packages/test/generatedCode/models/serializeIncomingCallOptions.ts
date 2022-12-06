import {IncomingCallOptions} from './index';
import {serializeCallOptions} from './serializeCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncomingCallOptions(writer: SerializationWriter, incomingCallOptions: IncomingCallOptions | undefined = {}) : void {
        serializeCallOptions(writer, incomingCallOptions)
}
