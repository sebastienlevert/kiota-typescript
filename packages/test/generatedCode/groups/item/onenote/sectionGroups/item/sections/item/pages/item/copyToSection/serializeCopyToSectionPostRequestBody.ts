import {CopyToSectionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToSectionPostRequestBody(writer: SerializationWriter, copyToSectionPostRequestBody: CopyToSectionPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("groupId", copyToSectionPostRequestBody.groupId);
            writer.writeStringValue("id", copyToSectionPostRequestBody.id);
            writer.writeStringValue("siteCollectionId", copyToSectionPostRequestBody.siteCollectionId);
            writer.writeStringValue("siteId", copyToSectionPostRequestBody.siteId);
}
