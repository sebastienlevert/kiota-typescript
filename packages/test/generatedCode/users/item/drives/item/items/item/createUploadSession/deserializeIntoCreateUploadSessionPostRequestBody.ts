import {deserializeIntoDriveItemUploadableProperties} from '../../../../../../../models/deserializeIntoDriveItemUploadableProperties';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "item": n => { createUploadSessionPostRequestBody.item = n.getObject(deserializeIntoDriveItemUploadableProperties) as any ; },
    }
}
