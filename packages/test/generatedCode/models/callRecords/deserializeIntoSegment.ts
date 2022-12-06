import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoFailureInfo} from './deserializeIntoFailureInfo';
import {deserializeIntoMedia} from './deserializeIntoMedia';
import {Segment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSegment(segment: Segment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(segment),
        "callee": n => { segment.callee = n.getObject(deserializeIntoEndpoint) as any ; },
        "caller": n => { segment.caller = n.getObject(deserializeIntoEndpoint) as any ; },
        "endDateTime": n => { segment.endDateTime = n.getDateValue() as any ; },
        "failureInfo": n => { segment.failureInfo = n.getObject(deserializeIntoFailureInfo) as any ; },
        "media": n => { segment.media = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMedia) as any ; },
        "startDateTime": n => { segment.startDateTime = n.getDateValue() as any ; },
    }
}
