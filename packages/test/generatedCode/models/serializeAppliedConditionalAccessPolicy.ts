import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AppliedConditionalAccessPolicy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppliedConditionalAccessPolicy(writer: SerializationWriter, appliedConditionalAccessPolicy: AppliedConditionalAccessPolicy | undefined = {}) : void {
            writer.writeStringValue("displayName", appliedConditionalAccessPolicy.displayName);
            writer.writeCollectionOfPrimitiveValues<string>("enforcedGrantControls", appliedConditionalAccessPolicy.enforcedGrantControls);
            writer.writeCollectionOfPrimitiveValues<string>("enforcedSessionControls", appliedConditionalAccessPolicy.enforcedSessionControls);
            writer.writeStringValue("id", appliedConditionalAccessPolicy.id);
            writer.writeStringValue("@odata.type", appliedConditionalAccessPolicy.odataType);
            writer.writeEnumValue<AppliedConditionalAccessPolicyResult>("result", appliedConditionalAccessPolicy.result);
}
