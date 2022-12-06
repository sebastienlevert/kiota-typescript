import {GetMemberGroupsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsPostRequestBody(writer: SerializationWriter, getMemberGroupsPostRequestBody: GetMemberGroupsPostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("securityEnabledOnly", getMemberGroupsPostRequestBody.securityEnabledOnly);
}
