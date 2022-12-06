import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentSession extends Entity, Partial<Parsable> {
    /** The content property */
    content?: string;
    /** The expirationDateTime property */
    expirationDateTime?: Date;
    /** The nextExpectedRanges property */
    nextExpectedRanges?: string[];
}
