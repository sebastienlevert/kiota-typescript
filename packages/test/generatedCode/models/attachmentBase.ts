import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentBase extends Entity, Partial<Parsable> {
    /** The contentType property */
    contentType?: string;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The name property */
    name?: string;
    /** The size property */
    size?: number;
}
