import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {CallType} from './callType';
import {deserializeIntoSession} from './deserializeIntoSession';
import {CallRecord} from './index';
import {Modality} from './modality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecord(callRecord: CallRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(callRecord),
        "endDateTime": n => { callRecord.endDateTime = n.getDateValue() as any ; },
        "joinWebUrl": n => { callRecord.joinWebUrl = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { callRecord.lastModifiedDateTime = n.getDateValue() as any ; },
        "modalities": n => { callRecord.modalities = n.getEnumValues<Modality>(Modality) as any ; },
        "organizer": n => { callRecord.organizer = n.getObject(deserializeIntoIdentitySet) as any ; },
        "participants": n => { callRecord.participants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
        "sessions": n => { callRecord.sessions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSession) as any ; },
        "startDateTime": n => { callRecord.startDateTime = n.getDateValue() as any ; },
        "type": n => { callRecord.type = n.getEnumValue<CallType>(CallType) as any ; },
        "version": n => { callRecord.version = n.getNumberValue() as any ; },
    }
}
