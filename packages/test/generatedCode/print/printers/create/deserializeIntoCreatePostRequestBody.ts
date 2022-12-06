import {deserializeIntoPrintCertificateSigningRequest} from '../../../models/deserializeIntoPrintCertificateSigningRequest';
import {CreatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreatePostRequestBody(createPostRequestBody: CreatePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateSigningRequest": n => { createPostRequestBody.certificateSigningRequest = n.getObject(deserializeIntoPrintCertificateSigningRequest) as any ; },
        "connectorId": n => { createPostRequestBody.connectorId = n.getStringValue() as any ; },
        "displayName": n => { createPostRequestBody.displayName = n.getStringValue() as any ; },
        "hasPhysicalDevice": n => { createPostRequestBody.hasPhysicalDevice = n.getBooleanValue() as any ; },
        "manufacturer": n => { createPostRequestBody.manufacturer = n.getStringValue() as any ; },
        "model": n => { createPostRequestBody.model = n.getStringValue() as any ; },
        "physicalDeviceId": n => { createPostRequestBody.physicalDeviceId = n.getStringValue() as any ; },
    }
}
