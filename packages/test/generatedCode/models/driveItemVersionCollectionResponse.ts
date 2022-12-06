import {BaseCollectionPaginationCountResponse, DriveItemVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DriveItemVersion[];
}
