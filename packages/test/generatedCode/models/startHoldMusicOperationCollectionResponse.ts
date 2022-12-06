import {BaseCollectionPaginationCountResponse, StartHoldMusicOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StartHoldMusicOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: StartHoldMusicOperation[];
}
