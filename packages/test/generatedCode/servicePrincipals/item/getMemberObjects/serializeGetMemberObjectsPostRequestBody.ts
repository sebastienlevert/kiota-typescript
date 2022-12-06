import {GetMemberObjectsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsPostRequestBody(writer: SerializationWriter, getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("securityEnabledOnly", getMemberObjectsPostRequestBody.securityEnabledOnly);
}
