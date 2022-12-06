import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CallType} from './callType';
import {CallRecord} from './index';
import {Modality} from './modality';
import {serializeSession} from './serializeSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecord(writer: SerializationWriter, callRecord: CallRecord | undefined = {}) : void {
        serializeEntity(writer, callRecord)
            writer.writeDateValue("endDateTime", callRecord.endDateTime);
            writer.writeStringValue("joinWebUrl", callRecord.joinWebUrl);
            writer.writeDateValue("lastModifiedDateTime", callRecord.lastModifiedDateTime);
            writer.writeEnumValue<Modality>("modalities", callRecord.modalities);
            writer.writeObjectValueFromMethod("organizer", callRecord.organizer as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("participants", callRecord.participants as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("sessions", callRecord.sessions as any, serializeSession);
            writer.writeDateValue("startDateTime", callRecord.startDateTime);
            writer.writeEnumValue<CallType>("type", callRecord.type);
            writer.writeNumberValue("version", callRecord.version);
}
