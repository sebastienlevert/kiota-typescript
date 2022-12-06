import {AttachmentBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskFileAttachment extends AttachmentBase, Partial<Parsable> {
    /** The contentBytes property */
    contentBytes?: string;
}
