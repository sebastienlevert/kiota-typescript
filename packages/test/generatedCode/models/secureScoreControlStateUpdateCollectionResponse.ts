import {BaseCollectionPaginationCountResponse, SecureScoreControlStateUpdate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlStateUpdateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SecureScoreControlStateUpdate[];
}
