import {BaseCollectionPaginationCountResponse, TeamsAsyncOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsAsyncOperation[];
}
