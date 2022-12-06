import {BaseCollectionPaginationCountResponse, SecureScoreControlProfile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfileCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SecureScoreControlProfile[];
}
