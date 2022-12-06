import {BaseCollectionPaginationCountResponse, VppToken} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VppTokenCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: VppToken[];
}
