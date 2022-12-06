import {BaseCollectionPaginationCountResponse, StopHoldMusicOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StopHoldMusicOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: StopHoldMusicOperation[];
}
