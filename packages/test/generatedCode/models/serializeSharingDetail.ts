import {SharingDetail} from './index';
import {serializeInsightIdentity} from './serializeInsightIdentity';
import {serializeResourceReference} from './serializeResourceReference';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharingDetail(writer: SerializationWriter, sharingDetail: SharingDetail | undefined = {}) : void {
            writer.writeObjectValueFromMethod("sharedBy", sharingDetail.sharedBy as any, serializeInsightIdentity);
            writer.writeDateValue("sharedDateTime", sharingDetail.sharedDateTime);
            writer.writeObjectValueFromMethod("sharingReference", sharingDetail.sharingReference as any, serializeResourceReference);
            writer.writeStringValue("sharingSubject", sharingDetail.sharingSubject);
            writer.writeStringValue("sharingType", sharingDetail.sharingType);
}
