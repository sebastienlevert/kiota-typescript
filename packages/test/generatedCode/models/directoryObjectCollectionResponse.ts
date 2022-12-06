import {BaseCollectionPaginationCountResponse, DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryObject[];
}
