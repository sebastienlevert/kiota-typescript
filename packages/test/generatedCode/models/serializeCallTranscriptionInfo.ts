import {CallTranscriptionState} from './callTranscriptionState';
import {CallTranscriptionInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscriptionInfo(writer: SerializationWriter, callTranscriptionInfo: CallTranscriptionInfo | undefined = {}) : void {
            writer.writeDateValue("lastModifiedDateTime", callTranscriptionInfo.lastModifiedDateTime);
            writer.writeStringValue("@odata.type", callTranscriptionInfo.odataType);
            writer.writeEnumValue<CallTranscriptionState>("state", callTranscriptionInfo.state);
}
