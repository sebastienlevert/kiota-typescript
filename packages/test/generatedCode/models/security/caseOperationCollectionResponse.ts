import {BaseCollectionPaginationCountResponse} from '../';
import {CaseOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CaseOperation[];
}
