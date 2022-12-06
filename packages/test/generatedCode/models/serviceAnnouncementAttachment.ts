import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachment extends Entity, Partial<Parsable> {
    /** The attachment content. */
    content?: string;
    /** The contentType property */
    contentType?: string;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The name property */
    name?: string;
    /** The size property */
    size?: number;
}
