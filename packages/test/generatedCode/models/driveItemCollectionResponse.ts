import {BaseCollectionPaginationCountResponse, DriveItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DriveItem[];
}
