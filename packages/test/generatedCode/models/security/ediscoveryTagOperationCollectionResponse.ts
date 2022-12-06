import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryTagOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryTagOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryTagOperation[];
}
