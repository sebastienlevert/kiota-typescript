import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoFailureInfo} from './deserializeIntoFailureInfo';
import {deserializeIntoSegment} from './deserializeIntoSegment';
import {Session} from './index';
import {Modality} from './modality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSession(session: Session | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(session),
        "callee": n => { session.callee = n.getObject(deserializeIntoEndpoint) as any ; },
        "caller": n => { session.caller = n.getObject(deserializeIntoEndpoint) as any ; },
        "endDateTime": n => { session.endDateTime = n.getDateValue() as any ; },
        "failureInfo": n => { session.failureInfo = n.getObject(deserializeIntoFailureInfo) as any ; },
        "modalities": n => { session.modalities = n.getEnumValues<Modality>(Modality) as any ; },
        "segments": n => { session.segments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSegment) as any ; },
        "startDateTime": n => { session.startDateTime = n.getDateValue() as any ; },
    }
}
