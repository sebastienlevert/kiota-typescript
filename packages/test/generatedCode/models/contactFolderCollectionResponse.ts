import {BaseCollectionPaginationCountResponse, ContactFolder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactFolderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContactFolder[];
}
