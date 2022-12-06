import {BaseCollectionPaginationCountResponse, UserTrainingEventInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingEventInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserTrainingEventInfo[];
}
