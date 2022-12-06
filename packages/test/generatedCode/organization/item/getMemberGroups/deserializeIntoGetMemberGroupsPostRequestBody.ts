import {GetMemberGroupsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberGroupsPostRequestBody(getMemberGroupsPostRequestBody: GetMemberGroupsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "securityEnabledOnly": n => { getMemberGroupsPostRequestBody.securityEnabledOnly = n.getBooleanValue() as any ; },
    }
}
