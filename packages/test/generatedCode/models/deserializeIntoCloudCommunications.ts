import {deserializeIntoCallRecord} from './callRecords/deserializeIntoCallRecord';
import {deserializeIntoCall} from './deserializeIntoCall';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOnlineMeeting} from './deserializeIntoOnlineMeeting';
import {deserializeIntoPresence} from './deserializeIntoPresence';
import {CloudCommunications} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudCommunications(cloudCommunications: CloudCommunications | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(cloudCommunications),
        "callRecords": n => { cloudCommunications.callRecords = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallRecord) as any ; },
        "calls": n => { cloudCommunications.calls = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCall) as any ; },
        "onlineMeetings": n => { cloudCommunications.onlineMeetings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnlineMeeting) as any ; },
        "presences": n => { cloudCommunications.presences = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPresence) as any ; },
    }
}
