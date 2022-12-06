import {ServiceHealthIssue} from './index';
import {serializeServiceAnnouncementBase} from './serializeServiceAnnouncementBase';
import {serializeServiceHealthIssuePost} from './serializeServiceHealthIssuePost';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssue(writer: SerializationWriter, serviceHealthIssue: ServiceHealthIssue | undefined = {}) : void {
        serializeServiceAnnouncementBase(writer, serviceHealthIssue)
            writer.writeEnumValue<ServiceHealthClassificationType>("classification", serviceHealthIssue.classification);
            writer.writeStringValue("feature", serviceHealthIssue.feature);
            writer.writeStringValue("featureGroup", serviceHealthIssue.featureGroup);
            writer.writeStringValue("impactDescription", serviceHealthIssue.impactDescription);
            writer.writeBooleanValue("isResolved", serviceHealthIssue.isResolved);
            writer.writeEnumValue<ServiceHealthOrigin>("origin", serviceHealthIssue.origin);
            writer.writeCollectionOfObjectValuesFromMethod("posts", serviceHealthIssue.posts as any, serializeServiceHealthIssuePost);
            writer.writeStringValue("service", serviceHealthIssue.service);
            writer.writeEnumValue<ServiceHealthStatus>("status", serviceHealthIssue.status);
}
