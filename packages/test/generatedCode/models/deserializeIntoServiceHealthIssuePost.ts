import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {ServiceHealthIssuePost} from './index';
import {PostType} from './postType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssuePost(serviceHealthIssuePost: ServiceHealthIssuePost | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { serviceHealthIssuePost.createdDateTime = n.getDateValue() as any ; },
        "description": n => { serviceHealthIssuePost.description = n.getObject(deserializeIntoItemBody) as any ; },
        "@odata.type": n => { serviceHealthIssuePost.odataType = n.getStringValue() as any ; },
        "postType": n => { serviceHealthIssuePost.postType = n.getEnumValue<PostType>(PostType) as any ; },
    }
}
