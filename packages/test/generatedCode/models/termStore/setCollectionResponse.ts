import {BaseCollectionPaginationCountResponse} from '../';
import {Set} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Set[];
}
