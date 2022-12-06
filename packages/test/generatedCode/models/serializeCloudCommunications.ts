import {serializeCallRecord} from './callRecords/serializeCallRecord';
import {CloudCommunications} from './index';
import {serializeCall} from './serializeCall';
import {serializeEntity} from './serializeEntity';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializePresence} from './serializePresence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudCommunications(writer: SerializationWriter, cloudCommunications: CloudCommunications | undefined = {}) : void {
        serializeEntity(writer, cloudCommunications)
            writer.writeCollectionOfObjectValuesFromMethod("callRecords", cloudCommunications.callRecords as any, serializeCallRecord);
            writer.writeCollectionOfObjectValuesFromMethod("calls", cloudCommunications.calls as any, serializeCall);
            writer.writeCollectionOfObjectValuesFromMethod("onlineMeetings", cloudCommunications.onlineMeetings as any, serializeOnlineMeeting);
            writer.writeCollectionOfObjectValuesFromMethod("presences", cloudCommunications.presences as any, serializePresence);
}
