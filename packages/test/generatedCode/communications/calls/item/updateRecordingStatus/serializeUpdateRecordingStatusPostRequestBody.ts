import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusPostRequestBody(writer: SerializationWriter, updateRecordingStatusPostRequestBody: UpdateRecordingStatusPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", updateRecordingStatusPostRequestBody.clientContext);
            writer.writeEnumValue<RecordingStatus>("status", updateRecordingStatusPostRequestBody.status);
}
