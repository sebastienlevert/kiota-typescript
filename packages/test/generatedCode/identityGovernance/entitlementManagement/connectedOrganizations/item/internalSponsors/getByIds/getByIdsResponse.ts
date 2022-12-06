import {BaseCollectionPaginationCountResponse, DirectoryObject} from '../../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetByIdsResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryObject[];
}
