import {BaseCollectionPaginationCountResponse, DataPolicyOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DataPolicyOperation[];
}
