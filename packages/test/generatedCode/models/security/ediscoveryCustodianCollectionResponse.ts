import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryCustodian} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodianCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryCustodian[];
}
