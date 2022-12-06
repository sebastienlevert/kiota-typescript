import {BaseCollectionPaginationCountResponse, MailSearchFolder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailSearchFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MailSearchFolder[];
}
