import {RecordingInfo} from './index';
import {RecordingStatus} from './recordingStatus';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordingInfo(writer: SerializationWriter, recordingInfo: RecordingInfo | undefined = {}) : void {
            writer.writeObjectValueFromMethod("initiator", recordingInfo.initiator as any, serializeIdentitySet);
            writer.writeStringValue("@odata.type", recordingInfo.odataType);
            writer.writeEnumValue<RecordingStatus>("recordingStatus", recordingInfo.recordingStatus);
}
