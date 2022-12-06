import {ActivityBasedTimeoutPolicy} from './index';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicy(writer: SerializationWriter, activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {}) : void {
        serializeStsPolicy(writer, activityBasedTimeoutPolicy)
}
