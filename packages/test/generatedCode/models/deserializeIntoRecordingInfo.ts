import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {RecordingInfo} from './index';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordingInfo(recordingInfo: RecordingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "initiator": n => { recordingInfo.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "@odata.type": n => { recordingInfo.odataType = n.getStringValue() as any ; },
        "recordingStatus": n => { recordingInfo.recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus) as any ; },
    }
}
