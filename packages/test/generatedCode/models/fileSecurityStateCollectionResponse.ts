import {BaseCollectionPaginationCountResponse, FileSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: FileSecurityState[];
}
