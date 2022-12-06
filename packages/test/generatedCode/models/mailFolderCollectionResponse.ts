import {BaseCollectionPaginationCountResponse, MailFolder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MailFolder[];
}
