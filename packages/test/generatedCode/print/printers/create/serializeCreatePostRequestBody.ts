import {serializePrintCertificateSigningRequest} from '../../../models/serializePrintCertificateSigningRequest';
import {CreatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreatePostRequestBody(writer: SerializationWriter, createPostRequestBody: CreatePostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("certificateSigningRequest", createPostRequestBody.certificateSigningRequest as any, serializePrintCertificateSigningRequest);
            writer.writeStringValue("connectorId", createPostRequestBody.connectorId);
            writer.writeStringValue("displayName", createPostRequestBody.displayName);
            writer.writeBooleanValue("hasPhysicalDevice", createPostRequestBody.hasPhysicalDevice);
            writer.writeStringValue("manufacturer", createPostRequestBody.manufacturer);
            writer.writeStringValue("model", createPostRequestBody.model);
            writer.writeStringValue("physicalDeviceId", createPostRequestBody.physicalDeviceId);
}
