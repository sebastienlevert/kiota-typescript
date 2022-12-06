import {serializeEntity} from '../serializeEntity';
import {Session} from './index';
import {Modality} from './modality';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFailureInfo} from './serializeFailureInfo';
import {serializeSegment} from './serializeSegment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSession(writer: SerializationWriter, session: Session | undefined = {}) : void {
        serializeEntity(writer, session)
            writer.writeObjectValueFromMethod("callee", session.callee as any, serializeEndpoint);
            writer.writeObjectValueFromMethod("caller", session.caller as any, serializeEndpoint);
            writer.writeDateValue("endDateTime", session.endDateTime);
            writer.writeObjectValueFromMethod("failureInfo", session.failureInfo as any, serializeFailureInfo);
            writer.writeEnumValue<Modality>("modalities", session.modalities);
            writer.writeCollectionOfObjectValuesFromMethod("segments", session.segments as any, serializeSegment);
            writer.writeDateValue("startDateTime", session.startDateTime);
}
