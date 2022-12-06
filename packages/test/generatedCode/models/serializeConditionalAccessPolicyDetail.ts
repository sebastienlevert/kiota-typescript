import {ConditionalAccessPolicyDetail} from './index';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicyDetail(writer: SerializationWriter, conditionalAccessPolicyDetail: ConditionalAccessPolicyDetail | undefined = {}) : void {
            writer.writeObjectValueFromMethod("conditions", conditionalAccessPolicyDetail.conditions as any, serializeConditionalAccessConditionSet);
            writer.writeObjectValueFromMethod("grantControls", conditionalAccessPolicyDetail.grantControls as any, serializeConditionalAccessGrantControls);
            writer.writeStringValue("@odata.type", conditionalAccessPolicyDetail.odataType);
            writer.writeObjectValueFromMethod("sessionControls", conditionalAccessPolicyDetail.sessionControls as any, serializeConditionalAccessSessionControls);
}
