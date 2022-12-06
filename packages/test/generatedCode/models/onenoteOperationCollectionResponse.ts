import {BaseCollectionPaginationCountResponse, OnenoteOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnenoteOperation[];
}
