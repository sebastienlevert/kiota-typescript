import {BaseCollectionPaginationCountResponse, DriveItem} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithMeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DriveItem[];
}
