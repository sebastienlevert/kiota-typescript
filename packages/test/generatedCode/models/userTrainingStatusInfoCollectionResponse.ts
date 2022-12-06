import {BaseCollectionPaginationCountResponse, UserTrainingStatusInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingStatusInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserTrainingStatusInfo[];
}
