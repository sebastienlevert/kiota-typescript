import {ServiceHealthIssuePost} from './index';
import {PostType} from './postType';
import {serializeItemBody} from './serializeItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssuePost(writer: SerializationWriter, serviceHealthIssuePost: ServiceHealthIssuePost | undefined = {}) : void {
            writer.writeDateValue("createdDateTime", serviceHealthIssuePost.createdDateTime);
            writer.writeObjectValueFromMethod("description", serviceHealthIssuePost.description as any, serializeItemBody);
            writer.writeStringValue("@odata.type", serviceHealthIssuePost.odataType);
            writer.writeEnumValue<PostType>("postType", serviceHealthIssuePost.postType);
}
