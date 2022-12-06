import {serializeEntity} from '../serializeEntity';
import {Segment} from './index';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFailureInfo} from './serializeFailureInfo';
import {serializeMedia} from './serializeMedia';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSegment(writer: SerializationWriter, segment: Segment | undefined = {}) : void {
        serializeEntity(writer, segment)
            writer.writeObjectValueFromMethod("callee", segment.callee as any, serializeEndpoint);
            writer.writeObjectValueFromMethod("caller", segment.caller as any, serializeEndpoint);
            writer.writeDateValue("endDateTime", segment.endDateTime);
            writer.writeObjectValueFromMethod("failureInfo", segment.failureInfo as any, serializeFailureInfo);
            writer.writeCollectionOfObjectValuesFromMethod("media", segment.media as any, serializeMedia);
            writer.writeDateValue("startDateTime", segment.startDateTime);
}
