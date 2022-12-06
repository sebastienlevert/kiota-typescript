import {deserializeIntoServiceAnnouncementBase} from './deserializeIntoServiceAnnouncementBase';
import {deserializeIntoServiceHealthIssuePost} from './deserializeIntoServiceHealthIssuePost';
import {ServiceHealthIssue} from './index';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssue(serviceHealthIssue: ServiceHealthIssue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoServiceAnnouncementBase(serviceHealthIssue),
        "classification": n => { serviceHealthIssue.classification = n.getEnumValue<ServiceHealthClassificationType>(ServiceHealthClassificationType) as any ; },
        "feature": n => { serviceHealthIssue.feature = n.getStringValue() as any ; },
        "featureGroup": n => { serviceHealthIssue.featureGroup = n.getStringValue() as any ; },
        "impactDescription": n => { serviceHealthIssue.impactDescription = n.getStringValue() as any ; },
        "isResolved": n => { serviceHealthIssue.isResolved = n.getBooleanValue() as any ; },
        "origin": n => { serviceHealthIssue.origin = n.getEnumValue<ServiceHealthOrigin>(ServiceHealthOrigin) as any ; },
        "posts": n => { serviceHealthIssue.posts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealthIssuePost) as any ; },
        "service": n => { serviceHealthIssue.service = n.getStringValue() as any ; },
        "status": n => { serviceHealthIssue.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus) as any ; },
    }
}
