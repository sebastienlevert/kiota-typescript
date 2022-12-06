import {BaseCollectionPaginationCountResponse, PrintOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintOperation[];
}
