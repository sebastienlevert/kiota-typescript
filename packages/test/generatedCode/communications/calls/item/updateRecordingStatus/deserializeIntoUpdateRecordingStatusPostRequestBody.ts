import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusPostRequestBody(updateRecordingStatusPostRequestBody: UpdateRecordingStatusPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { updateRecordingStatusPostRequestBody.clientContext = n.getStringValue() as any ; },
        "status": n => { updateRecordingStatusPostRequestBody.status = n.getEnumValue<RecordingStatus>(RecordingStatus) as any ; },
    }
}
