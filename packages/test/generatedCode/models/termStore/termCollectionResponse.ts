import {BaseCollectionPaginationCountResponse} from '../';
import {Term} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Term[];
}
