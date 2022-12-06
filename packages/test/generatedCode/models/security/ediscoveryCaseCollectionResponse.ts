import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryCase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryCase[];
}
