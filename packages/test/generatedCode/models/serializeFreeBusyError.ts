import {FreeBusyError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFreeBusyError(writer: SerializationWriter, freeBusyError: FreeBusyError | undefined = {}) : void {
            writer.writeStringValue("message", freeBusyError.message);
            writer.writeStringValue("@odata.type", freeBusyError.odataType);
            writer.writeStringValue("responseCode", freeBusyError.responseCode);
}
