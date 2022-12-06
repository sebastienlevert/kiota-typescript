import {BaseCollectionPaginationCountResponse, UpdateRecordingStatusOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateRecordingStatusOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UpdateRecordingStatusOperation[];
}
