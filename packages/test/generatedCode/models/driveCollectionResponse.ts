import {BaseCollectionPaginationCountResponse, Drive} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Drive[];
}
