import {Entity, ServiceHealthIssue} from './index';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealth extends Entity, Partial<Parsable> {
    /** A collection of issues that happened on the service, with detailed information for each issue. */
    issues?: ServiceHealthIssue[];
    /** The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant. */
    service?: string;
    /** The status property */
    status?: ServiceHealthStatus;
}
