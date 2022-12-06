import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AppliedConditionalAccessPolicy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppliedConditionalAccessPolicy(appliedConditionalAccessPolicy: AppliedConditionalAccessPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { appliedConditionalAccessPolicy.displayName = n.getStringValue() as any ; },
        "enforcedGrantControls": n => { appliedConditionalAccessPolicy.enforcedGrantControls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "enforcedSessionControls": n => { appliedConditionalAccessPolicy.enforcedSessionControls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "id": n => { appliedConditionalAccessPolicy.id = n.getStringValue() as any ; },
        "@odata.type": n => { appliedConditionalAccessPolicy.odataType = n.getStringValue() as any ; },
        "result": n => { appliedConditionalAccessPolicy.result = n.getEnumValue<AppliedConditionalAccessPolicyResult>(AppliedConditionalAccessPolicyResult) as any ; },
    }
}
