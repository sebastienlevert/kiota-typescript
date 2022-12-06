import {BaseCollectionPaginationCountResponse, SharedDriveItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedDriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharedDriveItem[];
}
