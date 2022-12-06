import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryIndexOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryIndexOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryIndexOperation[];
}
