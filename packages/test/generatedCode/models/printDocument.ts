import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocument extends Entity, Partial<Parsable> {
    /** The document's content (MIME) type. Read-only. */
    contentType?: string;
    /** The document's name. Read-only. */
    displayName?: string;
    /** The document's size in bytes. Read-only. */
    size?: number;
}
