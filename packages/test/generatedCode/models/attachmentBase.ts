import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentBase extends Entity, Partial<Parsable> {
    /** The MIME type. */
    contentType?: string;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    lastModifiedDateTime?: Date;
    /** The display name of the attachment. This does not need to be the actual file name. */
    name?: string;
    /** The length of the attachment in bytes. */
    size?: number;
}
