import {AssignUserToDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignUserToDevicePostRequestBody(writer: SerializationWriter, assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("addressableUserName", assignUserToDevicePostRequestBody.addressableUserName);
            writer.writeStringValue("userPrincipalName", assignUserToDevicePostRequestBody.userPrincipalName);
}
