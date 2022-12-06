import {BaseCollectionPaginationCountResponse} from '../';
import {ConnectionOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConnectionOperation[];
}
