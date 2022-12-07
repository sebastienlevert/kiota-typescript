import {InsightIdentity, ResourceReference} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharingDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The sharedBy property */
    sharedBy?: InsightIdentity;
    /** The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    sharedDateTime?: Date;
    /** The sharingReference property */
    sharingReference?: ResourceReference;
    /** The subject with which the document was shared. */
    sharingSubject?: string;
    /** Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'. */
    sharingType?: string;
}
