import {Entity, ServiceHealth, ServiceHealthIssue, ServiceUpdateMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncement extends Entity, Partial<Parsable> {
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly. */
    healthOverviews?: ServiceHealth[];
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly. */
    issues?: ServiceHealthIssue[];
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly. */
    messages?: ServiceUpdateMessage[];
}
