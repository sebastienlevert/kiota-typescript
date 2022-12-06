import {ServiceAnnouncementBase, ServiceHealthIssuePost} from './index';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssue extends Partial<Parsable>, ServiceAnnouncementBase {
    /** The classification property */
    classification?: ServiceHealthClassificationType;
    /** The feature name of the service issue. */
    feature?: string;
    /** The feature group name of the service issue. */
    featureGroup?: string;
    /** The description of the service issue impact. */
    impactDescription?: string;
    /** Indicates whether the issue is resolved. */
    isResolved?: boolean;
    /** The origin property */
    origin?: ServiceHealthOrigin;
    /** Collection of historical posts for the service issue. */
    posts?: ServiceHealthIssuePost[];
    /** Indicates the service affected by the issue. */
    service?: string;
    /** The status property */
    status?: ServiceHealthStatus;
}
