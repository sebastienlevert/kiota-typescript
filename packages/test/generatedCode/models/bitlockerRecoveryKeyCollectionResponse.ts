import {BaseCollectionPaginationCountResponse, BitlockerRecoveryKey} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKeyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BitlockerRecoveryKey[];
}
