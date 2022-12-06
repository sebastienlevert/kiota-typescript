import {Attachment, OutlookItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAttachment extends Attachment, Partial<Parsable> {
    /** The attached message or event. Navigation property. */
    item?: OutlookItem;
}
