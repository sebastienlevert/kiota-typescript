import {BaseCollectionPaginationCountResponse, ScoredEmailAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScoredEmailAddressCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ScoredEmailAddress[];
}
