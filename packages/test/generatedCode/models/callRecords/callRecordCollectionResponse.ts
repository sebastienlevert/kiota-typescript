import {BaseCollectionPaginationCountResponse} from '../';
import {CallRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CallRecord[];
}
