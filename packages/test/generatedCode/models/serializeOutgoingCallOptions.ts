import {OutgoingCallOptions} from './index';
import {serializeCallOptions} from './serializeCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutgoingCallOptions(writer: SerializationWriter, outgoingCallOptions: OutgoingCallOptions | undefined = {}) : void {
        serializeCallOptions(writer, outgoingCallOptions)
}
