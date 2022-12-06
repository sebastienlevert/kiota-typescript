import {Attachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ReferenceAttachment extends Attachment, Partial<Parsable> {
}
