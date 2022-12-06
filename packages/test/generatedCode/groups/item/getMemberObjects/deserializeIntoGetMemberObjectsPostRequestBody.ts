import {GetMemberObjectsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberObjectsPostRequestBody(getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "securityEnabledOnly": n => { getMemberObjectsPostRequestBody.securityEnabledOnly = n.getBooleanValue() as any ; },
    }
}
