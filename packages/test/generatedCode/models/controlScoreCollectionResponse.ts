import {BaseCollectionPaginationCountResponse, ControlScore} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ControlScoreCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ControlScore[];
}
