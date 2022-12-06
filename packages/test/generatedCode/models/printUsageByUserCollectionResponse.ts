import {BaseCollectionPaginationCountResponse, PrintUsageByUser} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUserCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintUsageByUser[];
}
