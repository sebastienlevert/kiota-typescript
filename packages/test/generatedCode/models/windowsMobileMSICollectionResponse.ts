import {BaseCollectionPaginationCountResponse, WindowsMobileMSI} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsMobileMSICollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsMobileMSI[];
}
