import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessPolicy} from './index';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicy(writer: SerializationWriter, conditionalAccessPolicy: ConditionalAccessPolicy | undefined = {}) : void {
        serializeEntity(writer, conditionalAccessPolicy)
            writer.writeObjectValueFromMethod("conditions", conditionalAccessPolicy.conditions as any, serializeConditionalAccessConditionSet);
            writer.writeDateValue("createdDateTime", conditionalAccessPolicy.createdDateTime);
            writer.writeStringValue("description", conditionalAccessPolicy.description);
            writer.writeStringValue("displayName", conditionalAccessPolicy.displayName);
            writer.writeObjectValueFromMethod("grantControls", conditionalAccessPolicy.grantControls as any, serializeConditionalAccessGrantControls);
            writer.writeDateValue("modifiedDateTime", conditionalAccessPolicy.modifiedDateTime);
            writer.writeObjectValueFromMethod("sessionControls", conditionalAccessPolicy.sessionControls as any, serializeConditionalAccessSessionControls);
            writer.writeEnumValue<ConditionalAccessPolicyState>("state", conditionalAccessPolicy.state);
}
