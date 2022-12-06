import {CreateLinkPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateLinkPostRequestBody(writer: SerializationWriter, createLinkPostRequestBody: CreateLinkPostRequestBody | undefined = {}) : void {
            writer.writeDateValue("expirationDateTime", createLinkPostRequestBody.expirationDateTime);
            writer.writeStringValue("message", createLinkPostRequestBody.message);
            writer.writeStringValue("password", createLinkPostRequestBody.password);
            writer.writeBooleanValue("retainInheritedPermissions", createLinkPostRequestBody.retainInheritedPermissions);
            writer.writeStringValue("scope", createLinkPostRequestBody.scope);
            writer.writeStringValue("type", createLinkPostRequestBody.type);
}
